import numberToOrdinal from './numberToOrdinal';

describe('Number to ordinal', () => {
  it('should transform 0 correctly', () => {
    expect(numberToOrdinal(0)).toEqual('0th');
  });

  it('should transform 1 correctly', () => {
    expect(numberToOrdinal(1)).toEqual('1st');
  });

  it('should transform 2 correctly', () => {
    expect(numberToOrdinal(2)).toEqual('2nd');
  });

  it('should transform 3 correctly', () => {
    expect(numberToOrdinal(3)).toEqual('3rd');
  });

  it('should transform 4 correctly', () => {
    expect(numberToOrdinal(4)).toEqual('4th');
  });

  it('should transform 11 correctly', () => {
    expect(numberToOrdinal(11)).toEqual('11th');
  });

  it('should transform 12 correctly', () => {
    expect(numberToOrdinal(12)).toEqual('12th');
  });

  it('should transform 13 correctly', () => {
    expect(numberToOrdinal(13)).toEqual('13th');
  });

  it('should transform 21 correctly', () => {
    expect(numberToOrdinal(21)).toEqual('21st');
  });

  it('should transform 122 correctly', () => {
    expect(numberToOrdinal(122)).toEqual('122nd');
  });

  it('should transform 101 correctly', () => {
    expect(numberToOrdinal(101)).toEqual('101st');
  });

  it('should transform 111 correctly', () => {
    expect(numberToOrdinal(111)).toEqual('111th');
  });
});
