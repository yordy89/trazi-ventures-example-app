export const validatePopulation = (req, res, next) => {
  const { population } = req.body;

  if (population === undefined) {
    return res
      .status(400)
      .json({ error: 'The "population" field is required.' });
  }

  if (typeof population !== "number") {
    return res
      .status(400)
      .json({ error: 'The "population" field must be a number.' });
  }

  next();
};
