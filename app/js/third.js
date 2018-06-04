var third = (function () {
  var init = function () {
      console.log('Работает третий модуль');
    },
    warn = function () {
      console.info('Ахтунг мы в логине!!!');
    };

  return {init: init, warn: warn};
})();