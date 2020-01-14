import calculateFare from './calculate-fare';

describe('calculateFare', () => {
  let result;

  beforeEach(() => {
    result = calculateFare('011', '016', 20, 'FaleMais 30');
  });

  it('Should return object', () => {
    expect.objectContaining(result);
  });

  it('Should return result.withPlan and result.noPlan not null', () => {
    expect(result.withPlan).not.toBeNull();
    expect(result.noPlan).not.toBeNull();
  });

  it('Should return result.withPlan and result.noPlan not undefined', () => {
    expect(result.withPlan).not.toBeUndefined();
    expect(result.noPlan).not.toBeUndefined();
  });
});
