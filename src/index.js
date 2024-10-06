
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import {app} from './app.js'
// import express from 'express';
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';

dotenv.config({
    path:'./.env'
})

// const app = express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server running at port ${process.env.PORT}`);
    })
}
)
.catch((err)=>{
    console.log("MongoDB db connection failed!!!!");
})





// const app=express()

// ;(async()=>{
//     try{
//         await mongoose.connect(`$(process.env.MONGODB_URI)/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Not able to talk to database",error);
//             throw error
//         })
        
//         app.listen(process.env.PORT,()=>{
//             console.log(`Listening on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("ERROR:", error)
//         throw err
//     }
// })()
    