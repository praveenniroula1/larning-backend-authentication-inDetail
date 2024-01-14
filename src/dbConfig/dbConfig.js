import mongoose from "mongoose";

export const dbConfig = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/detailingWithPrasan";
    const connection = mongoose.connect(MONGO_CLIENT);
    if (connection) {
      connection && console.log("MongoDb has been connected Successfully!!!!");
    }
  } catch (error) {
    console.log(error);
  }
};
