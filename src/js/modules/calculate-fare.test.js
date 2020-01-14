import calculateFare from './calculate-fare';

describe('calculateFare', () => {
  beforeEach(() => {
    const result = calculateFare('011', '016', 20, 'FaleMais 30');
  });

  it('Should return object', () => {
    expect.objectContaining(Object);
  });
});
