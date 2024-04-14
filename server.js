const express = require('express');
const app = express();
const database = require('./config/database');
const dotenv = require('dotenv');
const cors = require('cors');
const globalError = require('./middleware/errorMidlleware');
const ApiError = require('./utilis/ApiError');
dotenv.config();
database()
app.use(cors({
    origin:"*"
}))
app.use(express.json())
// middleware router
app.use('/api/v1/committees',require('./routers/committeesRouter'));
app.use('/api/v1/registrations',require('./routers/registrationRouter'));
app.use('/api/v1/userAdmin',require('./routers/userAdminRouter'));


app.use('*',(req,res,next)=>{
    //const err = new Error(`Can't find this route : ${req.originalUrl}`)
    next(new ApiError(`Can't find this route : ${req.originalUrl}`,400))
})

app.use(globalError)

const PORT = process.env.PORT
app.listen(PORT, ()=>console.log(`server raning with port ${PORT}`))