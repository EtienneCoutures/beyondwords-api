// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";
// Import passport
import passport from "passport";
// Import session
import session from 'express-session'

import { createDB } from "./create_db.js";

const port = 8080;

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());

// Init passport
app.use(session({ secret: 'POKEMON' }));
app.use(passport.initialize());
app.use(passport.session());
// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    // console.log("db :", db)
    await db.sync();
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router
app.use(Router);

// listen on port
app.listen(port, () => console.log('Server running at http://localhost:' + port));

// Todo find a way to do it only if not created
 createDB();
