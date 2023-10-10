// seed.js

import mongoose from "mongoose";
import connectDB from "./db.js";
import CityPopulation from "../models/CityPopulation.js";
import axios from "axios";

const CSV_URL =
  "https://raw.githubusercontent.com/Trazi-Ventures/sample-data-interview/main/city_populations.csv";

export const seedDB = async () => {
  connectDB();

  const { data } = await axios.get(CSV_URL);

  const lines = data.split("\n");
  for (let line of lines) {
    const [city, state, populationString] = line.split(",");
    const population = Number(populationString);

    if (city && state && !isNaN(population)) {
      await CityPopulation.create({
        city: city.toUpperCase(),
        state: state.toUpperCase(),
        population,
      });
    } else {
      console.warn(`Skipping invalid data: ${line}`);
    }
  }

  console.log("Data seeded successfully!");
};
