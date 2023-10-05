const validateValue = (value) => {
    if (Number.isInteger(value)) {
        return "Некорректное значение для валидации"
    }
    if (value < 0 || value > 100) {
        return false
    }

    return true
}

module.exports = validateValue;