import toNumber from '../src/toNumber';

describe('toNumber function', () => {
  test('number is returned as it is', () => {
    expect(toNumber(2)).toBe(2)
  });
  test('string is converted to number', () => {
    expect(toNumber('1.2')).toBe(1.2)
  });
  test('whitespaces are trimmed', () => {
    expect(toNumber('  22 ')).toBe(22)
  });
  test('bad signed hexadecimal string returns NaN', () => {
    expect(toNumber('0x00PS1E')).toBe(NaN)
  });
  test('non-numeric string returns NaN', () => {
    expect(toNumber('jalla')).toBe(NaN)
  });
  test('binary string is parsed correctly', () => {
    expect(toNumber('0b101')).toBe(5)
  });
  test('octal string is parsed correctly', () => {
    expect(toNumber('0o17')).toBe(15)
  });
  test('symbol returns NaN', () => {
    expect(toNumber(Symbol('a'))).toBe(NaN)
  });
  test('null is converted to 0', () => {
    expect(toNumber(null)).toBe(0)
  });
  test('empty string is converted to 0', () => {
    expect(toNumber('')).toBe(0)
  });
  test('objects valueOf as number is returned as number', () => {
    const input = {
        valueOf: () => 42
    };
    expect(toNumber(input)).toBe(42)
  });
  test('objects valueOf as string is converted to number', () => {
    const input = {
        valueOf: () => '55'
    };
    expect(toNumber(input)).toBe(55)
  });
})