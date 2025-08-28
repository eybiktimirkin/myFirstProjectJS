"use strict";

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

title = prompt("Как называется Ваш проект?");
screens = prompt(
  "Какие типы экранов нужно разработать",
  "Простые, сложные, Интерактивные"
);
screenPrice = +prompt("Сколько будет стоить данная работа", "12000");
adaptive = confirm("Нужен ли адаптив на сайте");

let service1 = prompt(
  "Какой дополнительный тип услуги нужен",
  "Установка приложения"
);
let servicePrice1 = +prompt("Сколько это будет стоить", "1000");
let service2 = prompt(
  "Какой дополнительный тип услуги нужен",
  "Установка приложения"
);
let servicePrice2 = +prompt("Сколько это будет стоить", "1000");

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let back = fullPrice * 0.1;
let servicePercentPrice = Math.ceil(fullPrice - back);
console.log(servicePercentPrice);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
  console.log("Что-то пошло не так");
}
