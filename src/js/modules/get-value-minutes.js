export default (flatRates, origin, destiny) => {
  for (let fare in flatRates) {
    if (!flatRates.hasOwnProperty(fare)) return;
    if (
      flatRates[fare].origin === origin &&
      flatRates[fare].destiny === destiny
    ) {
      return flatRates[fare].minutes;
    }
  }
};
