const asyncHandler = require('express-async-handler');
const { uploads } = require('../utilis/cloudinary');
const fs = require('fs');
const cloudinary = require('../utilis/cloudinary');
const { Download } = require('../models/download');
const path = require('path')

module.exports.createDownload = asyncHandler(async (req, res, next) => {
    const { title } = req.body
    const filePath = req.file.path
    //const file = req.file;
    //console.log(file);
    //const uploader = async (path) => await uploads(path, "pdf");
    //const { path } = file
    //console.log(path);
    //const image = await uploader(path)

    const result = await cloudinary.uploader.upload(filePath, {
        resource_type: 'raw', // Important for non-image files
    });
    console.log(result);
    
    fs.unlinkSync(filePath);
    await Download.create({
        title,
        file: result.secure_url
    })
    res.status(201).json({ message: 'created successfully' })
})


module.exports.getAllDownload = asyncHandler(async (req, res, next) => {
    const download = await Download.find({})
    res.status(201).json({ result: download })
})


module.exports.deleteDownload = asyncHandler(async (req, res, next) => {
    const download = await Download.findByIdAndDelete(req.params.id)
    const imagePath = path.join(__dirname, `../file/${download.file}`)
    console.log(imagePath);
    if (!download) {
        res.status(404).json({ message: "download not found" })
    }
    res.status(200).json({ message: "delete successfully" })
    fs.unlinkSync(imagePath)
})




module.exports.updateDownload = asyncHandler(async (req, res, next) => {
    const { title } = { ...req.body };
    const filename = req.file.filename
    console.log(filename);
    const { id } = req.params;


    const download = await Download.findByIdAndUpdate(
        { _id: req.params.id },
        {
            title,
            file: filename
        },
        { new: true }
    );
    console.log(download);
    res.status(201).json({ message: "update Successfully" })
})
