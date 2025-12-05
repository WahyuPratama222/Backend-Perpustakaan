const validateString = (value, fieldName, required = true) => {
    if (required) {
        if (value === undefined || value === null || value === "") {
            return `${fieldName} wajib diisi`;
        }
    } else {
         if (value === undefined || value === null || value === "") {
            return null;
        }
    }

    if (typeof value !== "string") {
        return `${fieldName} harus berupa string`;
    }

    return null;
};

const validateEnum = (value, fieldName, allowedValues, required = true) => {
    if (required) {
        if (value === undefined || value === null || value === "") {
            return `${fieldName} wajib diisi`;
        }
    } else {
        if (value === undefined || value === null || value === "") {
            return null;
        }
    }

    // Cek apakah value termasuk dalam daftar yang diizinkan
    if (!allowedValues.includes(value)) {
        return `${fieldName} harus salah satu dari: ${allowedValues.join(", ")}`;
    }

    return null;
};


const validateInt = (value, fieldName, required = true) => {
    if (required) {
        if (value === undefined || value === null || value === "") {
            return `${fieldName} wajib diisi`;
        }
    } else {
        if (value === undefined || value === null || value === "") {
            return null;
        }
    }

    const num = Number(value);

    if (!Number.isInteger(num)) {
        return `${fieldName} harus berupa integer`;
    }

    return null;
};

export { validateString, validateEnum, validateInt }; 