const validateEmail = (email, fieldName = "Email", required = true) => {
    if (required) {
        if (email === undefined || email === null || email === "") {
            return `${fieldName} wajib diisi`;
        }
    } else {
         if (email === undefined || email === null || email === "") {
            return null;
        }
    }

    if (typeof email !== "string" || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return `${fieldName} formatnya tidak valid`;
    }

    return null;
};

export { validateEmail };