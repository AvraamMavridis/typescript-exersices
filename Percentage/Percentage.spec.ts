import Percentage from './Percentage';

describe('Percentage', () => {
  it("normalizes values less than zero to zero", () => {
    expect(+(new Percentage(-100))).toEqual(0);
  });

  it('normalizes values greater than 100', () => {
    expect(+(new Percentage(101))).toEqual(100);
  });

  it('normalizes values greater than 100', () => {
    expect(new Percentage(100).toFixed(2)).toEqual("100.00");
  });

  it('keeps any value between 0 and 100 as it is', () => {
    expect(+new Percentage(0)).toEqual(0);
    expect(+new Percentage(99)).toEqual(99);
    expect(+new Percentage(100)).toEqual(100);
  });
})
