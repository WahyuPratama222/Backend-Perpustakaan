//Controller ini hanyalah dummy untuk mengetes middleware dari verifyToken

export const getUserController = (req, res, next) => {
    try {
        const user = req.user;
        res.status(200).json({
            message: "Token valid",
            user
        });
    } catch (error) {
        next(error);
    }
};
