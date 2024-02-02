import AppError from "./AppError.js";
import logger from "../libs/winstonLogger.js";

const tryCatch = (tryCatchHandler) => async (req, res, next) => {
  try {
    await tryCatchHandler(req, res, next);
  } catch (error) {
    logger.error(error.message);
    next(error instanceof AppError ? error : new AppError(500, error.message));
  }
};

export default tryCatch;
