import Mongoose from "mongoose";

const ImageModel = new Mongoose.Schema({
    images: [
        {
            location: { type: String, trequired: true },
        },
    ]
}, {
    timestamps: true,
},
);

export const ImageModel = mongoose.model("Images", ImageSchema);