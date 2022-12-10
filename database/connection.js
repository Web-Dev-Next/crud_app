import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.i2ug1h0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(uri);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
