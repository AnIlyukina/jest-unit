const square = require('./square');

describe('Функция квадрата', () => {

    // перед каждым тестом
    beforeEach(() => {

    })
    // перед всеми тестами один раз
    beforeAll(() => {

    })

    test('Корректное значение', () => {
        expect(square(2)).toBe(4)
    })

    test('Корректное значение', () => {
        expect(square(2)).toBeLessThan(5)
    })

    test('Корректное значение', () => {
        expect(square(2)).toBeGreaterThan(3)
    })

    test('Корректное значение', () => {
        expect(square(2)).not.toBeUndefined()
    })

    test('Проверка вызова метода', () => {
        // мокк функции
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })

    test('Проверка что метод не вызвался', () => {
        // мокк функции
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    // после каждого теста
    afterEach(() => {
        // очищать мокки чтобы они не накапливались
        jest.clearAllMocks()
    })

    // после всех тестов один раз
    afterAll(() => {

    })



})