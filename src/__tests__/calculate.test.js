import calculate from '../logic/calculate';

describe('calculate', () => {
  test('AC', () => {
    const calcObj = { total: 1, next: 2, operation: '+' };
    expect(calculate(calcObj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Addition', () => {
    const calcObj = { total: 1, next: 2, operation: '+' };
    expect(calculate(calcObj, '=').total).toEqual('3');
  });

  test('Substraction', () => {
    const calcObj = { total: 15, next: 11, operation: '−' };
    expect(calculate(calcObj, '=').total).toEqual('4');
  });

  test('Multiplication', () => {
    const calcObj = { total: 3, next: 3, operation: '×' };
    expect(calculate(calcObj, '=').total).toEqual('9');
  });

  test('Division', () => {
    const calcObj = { total: 64, next: 8, operation: '÷' };
    expect(calculate(calcObj, '=').total).toEqual('8');
  });

  test('Modulus', () => {
    const calcObj = { total: 10, next: 3, operation: '%' };
    expect(calculate(calcObj, '=').total).toEqual('1');
  });

  test('PlusMin', () => {
    const calcObj = { total: 10, next: null, operation: null };
    expect(calculate(calcObj, '±').total).toEqual('-10');
  });
});
