import cors from "cors";
import express from "express";
import logger from "morgan";
import * as dotenv from "dotenv";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

dotenv.config();

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3333);

app.use(logger("dev"));

// Set up middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
