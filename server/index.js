// importing env variables
require("dotenv").config();

// libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Database connection
import connectDB from "./database/connection";

const zomato = express();

// application middleware
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());


zomato.get("/", (req, res) =>
    res.json({ message: "setup success" }));

zomato.listen(4000, () => connectDB().then(() => console.log("server is running")).catch(() => console.log("server is running but database connection is failed")));
