import { Mongoose } from "mongoose";

const RestauratSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mapLocation: { type: String, required: true },
    cusisine: [String],
    restaurantTiming: String,
    contactMumber: Number,
    website: Number,
    popularDishes: [String],
    averageCost: Number,
    amenities: [String],
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    menu: {
        type: mongoose.Types.ObjectId,
        ref: "Menu",
    },
    reviews: [{ type: mongoose.Type.ObjectId, ref: "Reviews" }],
    photo: { type: mongoose.Types.ObjectId, ref: "Images" },
},
    {
        timestamps: true,
    },
)

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema)