import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/genesis")
  .then(() => {
    console.log("mongodb connected");
    mongoose.Promse = global.Promise;
  })
  .catch(err => {
    console.log("error connecting: ", err);
  });

export default mongoose;
