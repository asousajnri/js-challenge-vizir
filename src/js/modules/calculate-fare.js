import getValueMinutes from './get-value-minutes';

import data from '../../services/data';

const { plansList, flatRates } = data;

export default (origin, destiny, minutes, plan) => {
  let valueMinutes = getValueMinutes(flatRates, origin, destiny);
  let percentage = (valueMinutes * 10) / 100;
  let valuePlanMinutes = plansList[plan];

  let withPlan = parseFloat(
    minutes > valuePlanMinutes && !isNaN(valueMinutes) && minutes
      ? (valueMinutes + percentage) * (minutes - valuePlanMinutes)
      : 0
  ).toFixed(2);

  let noPlan = parseFloat(
    minutes != 0 && !isNaN(valueMinutes) && minutes ? valueMinutes * minutes : 0
  ).toFixed(2);

  return {
    withPlan,
    noPlan,
  };
};
