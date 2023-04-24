import express from 'express';
import cors from 'cors'
import UsersController from "./final-project/users/users-controller.js";
import ShowsController from "./final-project/shows/shows-controller.js";
import SessionController from "./final-project/session-controller.js";
import WatchedController from "./final-project/watched/watched-controller.js";
import PlaylistedController from "./final-project/playlists/playlisted-controller.js";
import mongoose from "mongoose";
import session from "express-session";


//const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//    || 'mongodb://127.0.0.1:27017/project';
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/project';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());

// cookie secure has to be false locally but true elsewhere - dif between http(s)
app.use(
    session({
        secret: "any string",
        resave: false,
        cookie: {secure: false}
    })
);

SessionController(app);
UsersController(app);
ShowsController(app);
WatchedController(app);
PlaylistedController(app);

app.listen(4000);



/*

import session from "express-session";

/*app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);

*/
/*
app.use(express.json());


UsersController(app);

*/
//ProfileController(app);
