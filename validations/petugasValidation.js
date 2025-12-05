import { validateString , validateEnum } from "../utils/validateDataUtil.js";
import { validateId } from "../utils/validateIdUtil.js";

const createValidatePetugas = (data) => {
    const { nama_petugas, username, password, role } = data;

    const stringFields = [
        { value: nama_petugas, name: "Nama petugas" },
        { value: username, name: "Username" },
        { value: password, name: "password" }
    ];

    for (const field of stringFields){
        const err = validateString(field.value, field.name)
        if (err) return err;
    };

    const err = validateEnum(role, "Role", ["Petugas", "Admin"]);
    if (err) return err;

    return null;
};

const updateRequiredValidatePetugas = (data, id) => {
    const errId = validateId(id);
    if (errId) return errId;

    const { nama_petugas, username, password } = data;

    const stringFields = [
        { value: nama_petugas, name: "Nama petugas" },
        { value: username, name: "Username" },
        { value: password, name: "password" }
    ];

    for (const field of stringFields){
        const err = validateString(field.value, field.name)
        if (err) return err;
    };

    return null;
}; 

const updateOptionalValidatePetugas = (data, id) => {
   const errId = validateId(id);
    if (errId) return errId;

    const { nama_petugas, username, password } = data;

    const stringFields = [
        { value: nama_petugas, name: "Nama petugas" },
        { value: username, name: "Username" },
        { value: password, name: "password" }
    ];

    for (const field of stringFields){
        const err = validateString(field.value, field.name, false)
        if (err) return err;
    };

    return null;
};

export { createValidatePetugas, updateRequiredValidatePetugas, updateOptionalValidatePetugas }