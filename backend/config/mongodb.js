import mongoose from "mongoose";

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb+srv://Hironmoy:Hiru123@cluster0.hlmtsqu.mongodb.net/prescripto");
        console.log('MongoDB Connected');
      } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
      }

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.