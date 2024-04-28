const cloudinaray = require("cloudinary")

cloudinaray.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_key,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


//cloudinary upload image
const cloudinarayUploadImage=async(fileToUpload)=>{
    try {
        const data = await cloudinaray.uploader.upload(fileToUpload,{
            resoutce_type:'auto'
        });
        return data
    } catch (error) {
        return error 
    }
}

//cloudinary Remove image
const cloudinarayRemoveImage=async(imagePublicId)=>{
    try {
        const result = await cloudinaray.uploader.destroy(imagePublicId);
        return result
    } catch (error) {
        return error
    }
}

const uploads = (file,folder) =>{
    return new Promise(resolve =>{
        cloudinaray.uploader.upload(file,{form},(result)=>{
            console.log(file);
            resolve({
                url:result.url,
                publucId:result.public_id
            })
        },{
            resource_type:"auto",
            folder:folder
        })
    })
}

//cloudinary Remove multiple image
const cloudinarayRemoveMultipleImage=async(publicIds)=>{
    try {
        const result = await cloudinaray.v2.api.delete_resources(publicIds);
        return result
    } catch (error) {
        return error
    }
}


module.exports = {
    cloudinarayUploadImage,
    cloudinarayRemoveImage,
    cloudinarayRemoveMultipleImage,
    uploads
}