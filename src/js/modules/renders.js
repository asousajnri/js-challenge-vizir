export default (() => {
  const _renderHtmlOptions = textOption => {
    let optionElem = document.createElement('li');
    optionElem.textContent = textOption;
    return optionElem;
  };

  const _setOptionsInSelect = (textToOption, fnRenderOption, selectElement) => {
    let htmlOption = fnRenderOption(textToOption);
    let ulForSetOptions = selectElement.querySelector(
      '.telzir-call__select-options'
    );
    return ulForSetOptions.appendChild(htmlOption);
  };

  const _renderSelects = (dataToLoop, elemSelect) => {
    dataToLoop.map(item => {
      _setOptionsInSelect(item, _renderHtmlOptions, elemSelect);
    });
  };

  return {
    renderSelects: _renderSelects,
  };
})();
