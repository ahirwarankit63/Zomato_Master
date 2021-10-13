import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    menus: [
        {
            name: { type: String, required: true },
            items: [
                {
                    types: mongoose.Types.ObjectId,
                    ref: "Foods",
                },
            ],
        },
    ],

    recommended: [
        {
            type: "Foods",
            ref: "Foods",
            unique: true,
        }
    ],
},
    {
        timestamps: true,
    },
),

export const MenuModel = mongoose.model("Menu", MenuSchema);