
first.init();
second.init();
third.init();

console.log('Hello world!!!');

// Если метод или модуль надо вызвать только на определенной странице
if ($('.login').length > 0) {
  third.warn();
}
