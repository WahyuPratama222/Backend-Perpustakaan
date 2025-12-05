import { validateInt } from "./validateDataUtil.js";

const validateCount = (data, fieldName, required = true) => {
    
    const checkErr = validateInt(data, fieldName, required);
    if (checkErr) return checkErr

    if (data <= 0) {
        return `${fieldName} tidak boleh kurang dari atau sama dengan 0`;
    }
    return null; 
}

export { validateCount };
