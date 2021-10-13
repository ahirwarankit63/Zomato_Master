import mongoose from "mongoose";

export default async () => {
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindModify: false,
        },
        () => 
        console.log("mongoose is connected")
        
    );

};



