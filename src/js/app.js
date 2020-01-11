import '../sass/app.scss';
import data from '../services/data';

import Renders from './modules/renders';

export default (() => {
  const { ddd, plans, flatRate } = data;

  const INPUT_FILDS = document.querySelector('.telzir-call__field-wrp');
  const SELECT_ORIGIN = INPUT_FILDS.querySelector('.telzir-call__origin');
  const SELECT_DESTINY = INPUT_FILDS.querySelector('.telzir-call__destiny');
  const SELECT_PLAN = INPUT_FILDS.querySelector('.telzir-call__plan');
  const INPUT_MINUTES = INPUT_FILDS.querySelector(
    '.telzir-call__destiny-time-minute'
  );

  Renders.renderSelects(ddd, SELECT_ORIGIN);
  Renders.renderSelects(ddd, SELECT_DESTINY);
  Renders.renderSelects(plans, SELECT_PLAN);

  const optionsSelectOrigin = SELECT_ORIGIN.querySelectorAll(
    '.telzir-call__select-options li'
  );

  const optionsSelectDestiny = SELECT_DESTINY.querySelectorAll(
    '.telzir-call__select-options li'
  );

  const optionsSelectPlans = SELECT_PLAN.querySelectorAll(
    '.telzir-call__select-options li'
  );
})();
