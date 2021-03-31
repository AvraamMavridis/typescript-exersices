import reducingDishes from './reducingDishes';

describe('Reducing Dishes', () => {
  it('Returns the maximum sum of Like-time coefficient', () => {
    expect(reducingDishes([-1, -8, 0, 5, -9])).toEqual(14);
    expect(reducingDishes([4, 3, 2])).toEqual(20);
    expect(reducingDishes([4, 3, 2])).toEqual(20);
    expect(reducingDishes([-1, -4, -5])).toEqual(0);
    expect(reducingDishes([-2, 5, -1, 0, 3, -3])).toEqual(35);
  });
});
