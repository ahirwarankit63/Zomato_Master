require("dotenv").config();

// libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// microservice rout
import Auth from "./API/Auth";

// database connection
import ConnectDB from "./database/connection";

const zomato = express ();

// appication middleware4
zomato.use(express.json());
zomato.use(express.urlencoded({extended: "flase"}));
zomato.use(helmet());
zomato.use(cors());

// Application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message : "setup sucess"}));

zomato.listen(3000, () => ConnectDB()
.then(() =>  console.log("server is running🧨🧨"))
.catch(() => console.log("server is running but database connection is failed") )

);




























// // importing env variables
// require("dotenv").config();

// // libraries
// import express from "express";
// import cors from "cors";
// import helmet from "helmet";

// // microservices
// import Auth from "./API/Auth/index.js";


// // Database connection
// import ConnectDB from "./database/connection";

// const zomato = express();

// // application middleware
// zomato.use(express.json());
// zomato.use(express.urlencoded({ extended: false }));
// zomato.use(helmet());
// zomato.use(cors());


// // Application Routes
// zomato.use("/auth", Auth);


// zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

// zomato.listen(3000, () =>
//     ConnectDB().then(() => console.log("server is running"))
//         .catch(() => console.log("server is running but database connection is failed")
//         )
// );
