import data from '../../services/data';

const { flatRates } = data;

import getValueMinutes from './get-value-minutes';

describe('getValueMinutes', () => {
  let minutesValue;

  describe('To DDD 011', () => {
    it('Should between DDD 011 - DDD 016 value minutes $ 1.90', () => {
      expect(getValueMinutes(flatRates, '011', '016')).toBe(1.9);
    });

    it('Should between DDD 011 - DDD 017 value minutes $ 1.70', () => {
      expect(getValueMinutes(flatRates, '011', '017')).toBe(1.7);
    });

    it('Should between DDD 011 - DDD 018 value minutes $ 0.90', () => {
      expect(getValueMinutes(flatRates, '011', '018')).toBe(0.9);
    });
  });

  describe('To DDD 016', () => {
    it('Should between DDD 017 - DDD 011 value minutes $ 2.90', () => {
      expect(getValueMinutes(flatRates, '016', '011')).toBe(2.9);
    });

    it('Should between DDD 017 - DDD 017 value minutes $ 3.90', () => {
      expect(getValueMinutes(flatRates, '016', '017')).toBe(3.9);
    });

    it('Should between DDD 017 - DDD 018 value minutes $ 4.90', () => {
      expect(getValueMinutes(flatRates, '016', '018')).toBe(4.9);
    });
  });

  describe('To DDD 017', () => {
    it('Should between DDD 017 - DDD 011 value minutes $ 2.70', () => {
      expect(getValueMinutes(flatRates, '017', '011')).toBe(2.7);
    });

    it('Should between DDD 017 - DDD 016 value minutes $ 1.20', () => {
      expect(getValueMinutes(flatRates, '017', '016')).toBe(1.2);
    });

    it('Should between DDD 017 - DDD 018 value minutes $ 1.80', () => {
      expect(getValueMinutes(flatRates, '017', '018')).toBe(1.8);
    });
  });

  describe('To DDD 018', () => {
    it('Should between DDD 018 - DDD 011 value minutes $ 1.90', () => {
      expect(getValueMinutes(flatRates, '018', '011')).toBe(1.9);
    });

    it('Should between DDD 018 - DDD 016 value minutes $ 3.10', () => {
      expect(getValueMinutes(flatRates, '018', '016')).toBe(3.1);
    });

    it('Should between DDD 018 - DDD 017 value minutes $ 2.40', () => {
      expect(getValueMinutes(flatRates, '018', '017')).toBe(2.4);
    });
  });
});
