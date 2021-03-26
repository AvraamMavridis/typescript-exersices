import fixPolishFlag from './fixPolishFlag';

describe('Polish Flag', () => {
  it('should fix the flag', () => {
    const problem = ['R', 'W', 'W', 'W', 'R', 'W', 'R', 'W'];

    expect(fixPolishFlag(problem).flag).toEqual(['R', 'R', 'R', 'W', 'W', 'W', 'W', 'W']);
  });
});
