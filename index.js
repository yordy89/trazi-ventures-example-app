import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import { seedDB } from "./src/config/seed.js";
import CityPopulationRouter from "./src/routes/CityPopulation.js";

const app = express();
dotenv.config();
app.use(express.json());

connectDB();

app.use("/api/population", CityPopulationRouter);

seedDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
  });
});
