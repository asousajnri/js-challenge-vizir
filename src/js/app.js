import '../sass/app.scss';

import calculateFare from './modules/calculate-fare';

export default (() => {
  const SELECTS = Array.from(document.querySelectorAll('.telzir-call__select'));

  const INPUT_MINUTES = document.querySelector(
    '.telzir-call__destiny-time-minute'
  );

  const FIELD_TO_SET_RESULT_WITH_PLAN = document.querySelector(
    '.with-plan .number'
  );
  const FIELD_TO_SET_RESULT_NO_PLAN = document.querySelector(
    '.no-plan .number'
  );

  const fieldsController = () => {
    let origin = SELECTS[0].value;
    let destiny = SELECTS[1].value;
    let plan = SELECTS[2].value;
    let minutes = INPUT_MINUTES.value;

    let result = calculateFare(origin, destiny, minutes, plan);

    FIELD_TO_SET_RESULT_WITH_PLAN.textContent = `$ ${result.withPlan}`;
    FIELD_TO_SET_RESULT_NO_PLAN.textContent = `$ ${result.noPlan}`;
  };

  INPUT_MINUTES.addEventListener('keydown', e => {
    setTimeout(() => {
      if (isNaN(e.target.value)) {
        e.target.value = '';
      }

      if ((e.target.value > 10 && e.target.value) || e.key === 'Backspace') {
        fieldsController();
      }
    }, 100);
  });

  SELECTS.map(select => {
    select.addEventListener('change', () => fieldsController());
  });
})();
