import { AppError } from "./appError.js";

export const validationError = (message) => {
    return new AppError(message, 400, "ValidationError");
};

export const badRequestError = (message) => {
    return new AppError(message, 400, "BadRequestError");
};

export const notFoundError = (message) => {
    return new AppError(message, 404, "NotFoundError");
};

export const authError = (message) => {
    return new AppError(message, 401, "AuthError");
};
