import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const uri = process.env.MONGO_URI;
const connectDB = async () => {
  console.log(encodeURIComponent(uri)) 
  try { 
    const conn = await mongoose.connect(
     uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }) 

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold) 
    process.exit(1)
  }
}

export default connectDB
