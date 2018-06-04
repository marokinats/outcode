var first = (function () {
  var init = function () {
    console.log('Инициализирован первый модуль');
  }

  return {init: init};
})();
