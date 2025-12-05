import { AppError } from "./appError.js";

const validationError = (message) => new AppError(message, 400, "ValidationError");
const badRequestError = (message) => new AppError(message, 400, "BadRequestError");
const notFoundError = (message) => new AppError(message, 404, "NotFoundError");
const authError = (message) => new AppError(message, 401, "AuthError")

export {validationError, badRequestError, notFoundError, authError}