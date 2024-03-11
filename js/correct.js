'use strict';

const item = document.querySelectorAll('.item');
const itemTitle = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');

// Перенес строку 'Глава 4. Преобразование типов'
const propsItemFour = document.querySelectorAll('.props__item_four');
const listItem = document.querySelector('.item_two .content .props__list .props__item_four');
propsItemFour[2].before(listItem);

// Перенес строку 'Приложение А. Дальнейшее изучение Приложение Б. Практика.'
const propsItemTwo = document.querySelectorAll('.props__item_two');
const appTextOne = document.querySelector(
  '.item_six .content .props__list .props__item:nth-child(9)'
);
const appTextTwo = document.querySelector(
  '.item_six .content .props__list .props__item:nth-child(10)'
);
propsItemTwo[7].after(appTextOne);
propsItemTwo[8].after(appTextTwo);

// Поменял props__list местами
itemTitle[2].after(propsList[4]);
itemTitle[3].after(propsList[3]);

// Удалил баннер
const banner = document.querySelector('.ads');
banner.remove();

// Поменял карточки
item[3].after(item[0]);

// Поменял заголовок у JS
const titleCloserAndObj = itemTitle[2];
const newTitile = document.createElement('h1');
const text = document.createTextNode('This и прототипы объектов');
newTitile.append(text);
titleCloserAndObj.replaceWith(newTitile);

// Поменял заголовки
const titleEsSix = itemTitle[1].textContent;
const titleScopeAndCloser = itemTitle[3].textContent;

itemTitle[1].textContent = titleScopeAndCloser;
itemTitle[3].textContent = titleEsSix;

const newTitleScopeAndCloser = itemTitle[3].textContent;
const titleAsync = itemTitle[4].textContent;

itemTitle[3].textContent = titleAsync;
itemTitle[4].textContent = newTitleScopeAndCloser;
