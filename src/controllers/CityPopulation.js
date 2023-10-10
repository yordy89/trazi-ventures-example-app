import CityPopulationModel from "../models/CityPopulation.js";

export const findPopulationByCityAndState = async (req, res) => {
  const { state, city } = req.params;

  try {
    const cityPopulation = await CityPopulationModel.findOne({
      state: state.toUpperCase(),
      city: city.toUpperCase(),
    });

    if (!cityPopulation) {
      return res.status(400).json({
        message: `No population data found for ${city}, ${state}`,
      });
    }

    return res.status(200).json({
      population: cityPopulation.population,
    });
  } catch (error) {
    throw new Error({
      message: `Error finding population data for ${city}, ${state}`,
      error,
    });
  }
};

export const updatePopulationByCityAndState = async (req, res) => {
  const { state, city } = req.params;
  const { population } = req.body;

  try {
    const cityPopulation = await CityPopulationModel.findOneAndUpdate(
      {
        state: state.toUpperCase(),
        city: city.toUpperCase(),
      },
      {
        population,
      },
      {
        new: true,
      }
    );

    if (!cityPopulation) {
      const newCityPopulation = await CityPopulationModel.create({
        state: state.toUpperCase(),
        city: city.toUpperCase(),
        population,
      });

      return res.status(201).json({
        population: newCityPopulation.population,
      });
    }

    return res.status(200).json({
      population: cityPopulation.population,
    });
  } catch (error) {
    throw new Error({
      message: `Error updating population data for ${city}, ${state}`,
      error,
    });
  }
};
