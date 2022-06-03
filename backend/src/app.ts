import cors from "cors";
import express from "express";
import logger from "morgan";
import cors from "cors";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

require("dotenv").config();

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(logger("dev"));

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
