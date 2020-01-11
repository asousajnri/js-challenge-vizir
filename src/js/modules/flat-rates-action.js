export default (() => {
  const _getMinutesValue = (dataFares, origin, destiny) => {
    // console.log(dataFares);

    for (let fare in dataFares) {
      if (dataFares.hasOwnProperty(fare)) {
        if (
          dataFares[fare].origin === origin &&
          dataFares[fare].destiny === destiny
        ) {
          return dataFares[fare].minutes;
        }
      }
    }
  };

  return {
    getMinutesValue: _getMinutesValue,
  };
})();
