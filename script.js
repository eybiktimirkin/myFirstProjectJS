const books = document.querySelectorAll(".book");
const book3Title = books[4].querySelector("h2 a");
const target = document.querySelector(".adv");
const chapter = books[0].querySelectorAll("li");
const chapter2 = books[5].querySelectorAll("li");

const book6 = books[2];
const ul = book6.querySelector("ul");
const newChapter = document.createElement("li");
newChapter.textContent = "Глава 8: За пределами ES6";
const allChapters = ul.querySelectorAll("li");
ul.insertBefore(newChapter, allChapters[9]);

console.log(books);

books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);

document.body.style.backgroundImage = "url(image/you-dont-know-js.jpg)";
book3Title.textContent = "Книга 3. this и Прототипы Объектов";
target.remove();

books[0].append(
  chapter[0],
  chapter[1],
  chapter[3],
  chapter[6],
  chapter[8],
  chapter[4],
  chapter[5],
  chapter[7],
  chapter[9],
  chapter[2],
  chapter[10]
);

books[5].append(
  chapter2[0],
  chapter2[1],
  chapter2[9],
  chapter2[3],
  chapter2[4],
  chapter2[2],
  chapter2[6],
  chapter2[7],
  chapter2[5],
  chapter2[8],
  chapter2[10]
);
