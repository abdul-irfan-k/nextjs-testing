import mongoose from "mongoose";

export const connectDb = () => new Promise<{ isConnected: boolean }>(
  async (resolve, reject) => {
    try {
      if (mongoose.connections[0].readyState)
        return resolve({ isConnected: true });

      await mongoose.connect("mongodb://127.0.0.1:27017/TodoApp");
      return resolve({ isConnected: true });
    } catch (error) {
      reject();
    }
  }
);
