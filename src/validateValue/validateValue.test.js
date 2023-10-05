const validateValue = require('./validateValue');

describe('Валидация значения', () => {
    test('Положительное значение', () => {
        expect(validateValue(50)).toBeTruthy()
    })

    test('Отрицательное знанчение', () => {
        expect(validateValue(-10)).toBeFalsy()
    })

    test('Пограничное значение ', () => {
        expect(validateValue(0)).toBeTruthy()
    })

    test('Некорректное значение', () => {
        expect(validateValue('dgdgds')).toBe('Некорректное значение для валидации')
    })

    test('Некорректное значение', () => {
        expect(validateValue([])).toBe('Некорректное значение для валидации')
    })
})