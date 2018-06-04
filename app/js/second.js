var second = (function () {
  var init = function () {
    console.log('Инициализирован второй модуль и вызван первый');
    first.init();
  }

  return {init: init};
})();