"use strict";

const title1 = document.getElementsByTagName("h1");
const buttons = document.getElementsByClassName("handler_btn");
const plusButton = document.querySelector(".screen-btn");
const otherItems = document.querySelectorAll(".other-items.percent");
const otherItems2 = document.querySelectorAll(".other-items.number");
const input = document.querySelector(".rollback input[type='range']");
const span = document.querySelector(".rollback span.range-value");
const inputs = document.getElementsByClassName("total-input");
let screens = document.querySelectorAll(".screen");

console.log(title1[0].textContent);
console.log(buttons[0].textContent);
console.log(buttons[1]);
console.log(otherItems);
console.log(otherItems2);
console.log(input);
console.log(span);
console.log(inputs[0]);
console.log(inputs[1]);
console.log(inputs[2]);
console.log(inputs[3]);
console.log(inputs[4]);
console.log(screens);

const appData = {
  title: " ",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getTitle();
    appData.getServicePercentPrice();

    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getValidString: function (message, defaultValue = "") {
    let result;
    do {
      result = prompt(message, defaultValue);
      if (result === null) {
        result = "";
      } else {
        result = result.trim();
      }
    } while (!result);
    return result;
  },
  getValidNumber: function (message) {
    let result;
    do {
      result = prompt(message);
    } while (!appData.isNumber(result));
    return +result;
  },
  asking: function () {
    appData.title = appData.getValidString(
      "Как называется Ваш проект?",
      "Калькулятор верстки"
    );

    for (let i = 0; i < 2; i++) {
      const name = appData.getValidString(
        "Какие типы экранов нужно разработать?"
      );
      const price = appData.getValidNumber(
        "Сколько будет стоить данная работа?"
      );
      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      const name = appData.getValidString(
        "Какой дополнительный тип услуги нужен"
      );
      const price = appData.getValidNumber("Сколько это будет стоить");
      appData.services[name] = price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте");
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  getRollBackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase();
  },
  getServicePercentPrice: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};
