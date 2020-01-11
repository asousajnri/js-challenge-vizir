import '../sass/app.scss';
import data from '../services/data';

import Renders from './modules/renders';
import getOptionsElem from './modules/get-options-elements';
import flatRatesAction from './modules/flat-rates-action';

export default (() => {
  const { ddd, plans, flatRate } = data;

  const INPUT_FILDS = document.querySelector('.telzir-call__field-wrp');
  const SELECT_ORIGIN = INPUT_FILDS.querySelector('.telzir-call__origin');
  const SELECT_DESTINY = INPUT_FILDS.querySelector('.telzir-call__destiny');
  const SELECT_PLAN = INPUT_FILDS.querySelector('.telzir-call__plan');
  const INPUT_MINUTES = INPUT_FILDS.querySelector(
    '.telzir-call__destiny-time-minute'
  );

  const FARE_WITH_PLAN = document.querySelector('.with-plan .number');
  const FARE_NO_PLAN = document.querySelector('.no-plan .number');

  const NOTIFICATION_BLOCK = document.querySelector(
    '.telzir-call__notification'
  );

  NOTIFICATION_BLOCK.textContent =
    'Não existe tarifa para o que você escolheu (origem/destino)!';

  Renders.renderSelects(ddd, SELECT_ORIGIN);
  Renders.renderSelects(ddd, SELECT_DESTINY);
  Renders.renderSelects(plans, SELECT_PLAN);

  const optionsAll = getOptionsElem(INPUT_FILDS);

  const mainFieldsControllers = () => {
    let placeholderOriginValue = SELECT_ORIGIN.querySelector(
      '.telzir-call__select-placeholder'
    ).textContent;
    let placeholderDestinyValue = SELECT_DESTINY.querySelector(
      '.telzir-call__select-placeholder'
    ).textContent;
    let placeholderPlanValue = SELECT_PLAN.querySelector(
      '.telzir-call__select-placeholder'
    ).textContent;
    let inputMinutesValue = INPUT_MINUTES.value;

    let valueMinutes = flatRatesAction.getMinutesValue(
      flatRate,
      placeholderOriginValue,
      placeholderDestinyValue
    );

    if (placeholderOriginValue === placeholderDestinyValue) {
      NOTIFICATION_BLOCK.classList.add('show');

      //   let timerShowNotification = setTimeout(() => {
      //     NOTIFICATION_BLOCK.classList.remove('show');
      //   }, 3000);

      //   clearTimeout(timerShowNotification);
    } else {
      NOTIFICATION_BLOCK.classList.remove('show');
    }

    plans.map(plan => {
      if (plan != placeholderPlanValue) return;

      let valueMinutesCurrentPlan = parseInt(plan.match(/\d+/g));
      let percentes = (valueMinutes * 10) / 100;

      let valueWithPlan = parseFloat(
        (valueMinutes + percentes) *
          (inputMinutesValue - valueMinutesCurrentPlan)
      ).toFixed(2);

      if (
        !isNaN(valueWithPlan) &&
        inputMinutesValue >= valueMinutesCurrentPlan
      ) {
        FARE_WITH_PLAN.textContent = `$ ${valueWithPlan}`;
      } else {
        FARE_WITH_PLAN.textContent = `$ 0.00`;
      }
    });

    let valueNoPlan = valueMinutes
      ? parseFloat(valueMinutes * inputMinutesValue).toFixed(2)
      : parseFloat(0.0).toFixed(2);
    if (!isNaN(valueNoPlan)) FARE_NO_PLAN.textContent = `$ ${valueNoPlan}`;
  };

  const controllerFieldActions = (listenedField, currentParentElem) => {
    if (currentParentElem && listenedField.nodeName != 'INPUT') {
      let placeholderElem = currentParentElem.querySelector(
        '.telzir-call__select-placeholder'
      );

      placeholderElem.textContent = listenedField.textContent;
      mainFieldsControllers();
    } else {
      setTimeout(() => {
        if (isNaN(listenedField.value)) {
          listenedField.value = '';

          return;
        }

        mainFieldsControllers();
      }, 100);
    }
  };

  optionsAll.map(option => {
    option.addEventListener('click', ({ target }) => {
      let parentElemt = target.closest('.telzir-call__select');
      parentElemt.classList.add('hide');
      setTimeout(() => {
        parentElemt.classList.remove('hide');
      }, 200);
      controllerFieldActions(target, parentElemt);
    });
  });

  INPUT_MINUTES.addEventListener('keydown', ({ target }) => {
    controllerFieldActions(target);
  });
})();
