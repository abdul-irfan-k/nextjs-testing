import mongoose from "mongoose";

export const connectDb = () => new Promise<{ isConnected: boolean }>(
  async (resolve, reject) => {
    try {
      console.log('checking it is connected or not ')
      if (mongoose.connections[0].readyState)
        return resolve({ isConnected: true });
      console.log("not connected        == ")
      await mongoose.connect("mongodb://127.0.0.1:27017/TodoApp");
      return resolve({ isConnected: true });
    } catch (error) {
      reject();
    }
  }
);
