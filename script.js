let title = "Мой первый проект";
let screens = "Простые, сложные, Интерактивные";
let screenPrice = 1000;
let rollback = 88;
let fullPrice = 2000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей");
console.log(screens.toLowerCase());
console.log(screens.split(" "));
console.log(
  "Процент отката посреднику за работу" + " " + (fullPrice * rollback) / 100
);
