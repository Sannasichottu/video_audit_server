const mongoose = require('mongoose')

const connectDb = async() => {
    // await mongoose.connect(process.env.MONGODB);
    // console.log('DB is working')
     try {
       const conn = await mongoose.connect(process.env.MONGODB);
       console.log(`MongoDB Connected Successfully`);
     } catch (error) {
       console.log(`Error : ${error.message}`);
       process.exit(1);
     }
}

//export 
module.exports = connectDb;