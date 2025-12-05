const validateId = (id) => {
    if (id === undefined || id === null || id === '') {
        return "ID tidak boleh kosong";
    }

    const parsed = Number(id);

    if (Number.isNaN(parsed)) {
        return "ID harus berupa angka";
    }

    if (!Number.isInteger(parsed) || parsed <= 0) {
        return "ID harus berupa angka bulat positif";
    }

    return null;
};

export { validateId };
