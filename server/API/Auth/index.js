// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user"

const Router = express.Router();

/*
Route         /signup
Desc         Register New User
Params        None
Access        Public
Method        Post
*/

Router.post("/signup", async (req, res) => {
    try {

        await UserModel.findByEmailAndPhone(req.body.credentials);

        // save to DB
        const newUser = await UserModel.create(req.body.credentials);

        // generate JWT auth token
        const token = newUser.generateJwtToken();

        // return
        return res.status(200).json({ token, status: "success" });
    }

    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route         /signin
Desc          Signin with email and password
Params        None
Access        Public
Method        Post
*/

Router.post("/signin", async (req, res) => {
    try {
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        const token = user.generateJwtToken();

        return res.status(200).json({ token, status: "success" });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;








