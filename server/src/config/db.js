import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('mongoDB connected')
  } catch (err) {
    console.log('connectDB err')
    process.exit(1)
  }
}

export default connectDB