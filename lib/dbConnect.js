const mongoose = require('mongoose');

const MONGODB_URI = process.env.DB_HOST;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;