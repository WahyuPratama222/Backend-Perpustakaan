import { validateString } from "../utils/validateDataUtil.js";

const loginAuthValidation = (data) => {

    const {username, password} = data;

    let err = validateString(username, "Username");
    if (err) return err;

    err = validateString(password, "Password");
    if (err) return err;

    return null;
};

export { loginAuthValidation };