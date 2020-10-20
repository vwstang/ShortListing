import { validationResult } from "express-validator";

export default (req, res, next) => {
  const errors = validationResult(req);
  return !errors.isEmpty()
    ? res.status(400).json({ errors: errors.array() })
    : next();
};
