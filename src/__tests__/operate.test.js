import operate from '../logic/operate';

describe('operate', () => {
  test('Addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('Substraction', () => {
    expect(operate(10, 8, '−')).toBe('2');
  });

  test('Multiplication', () => {
    expect(operate(2, 2, '×')).toBe('4');
  });

  test('Division', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('Module', () => {
    expect(operate(10, 3, '%')).toBe('1');
  });
});
