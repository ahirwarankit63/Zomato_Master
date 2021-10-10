import { Mongoose } from "mongoose";

const FoodSchema = new Mongoose.Schema(
    {
        name: { type: String, required: true },

        descript: { type: String, required: true },

        isVeg: { true: Boolean, required: true },

        isContainsEgg: { type: Boolean, requires: true },

        category: { type: Boolean, requied: true },

        photos: {
            type: mongoose.Type.ObjectId,
            ref: "Images",
        },

        price: { type: Number, default: 150, required: true },

        addOns: [{
            type: mongoose.Type.ObjectId,
            ref: "Foods",
        }],

        restaurants: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurants",
            required: true,
        }
    },
    {
        timestamps: true,
    },
),

export const FoodModel = mongoose.model("Foods", FoodSchema)