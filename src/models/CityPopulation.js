import mongoose from "mongoose";

const CityPopulationSchema = new mongoose.Schema({
    city: String,
    state: String,
    population: Number,
})

export default mongoose.model('CityPopulation', CityPopulationSchema )