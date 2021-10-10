// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

// Models
import { UserModel, userModel } from "../../database/user";

const Router = express.Router();

/*
Route         /signup
Desc          Signup with email and password
Params        None
Access        Public
Method        Post
*/

Router.post("/signup", async (req, res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.credentials;

        // Check wether email exist
        const checkUserByEmail = await UserModel.findOne({ email });

        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        const checkUserByEmail = await UserModel.findOne({ email });

        if (checkUserByEmail || checkUserByPhone) {
            return res.json({ error: "User already exist!!" });
        }
        // hash password
        const bcryptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        // save to db
        await UserModel.create({
            ...req.body.credentials, password: hashedPassword,
        });

        //  generate JWT auth token
        const token = jwt.sign({ user: { fullname, email } }, "ZomatoAPP");

        // return
        return res.status(200).json({ token, status: "Sucess" });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;