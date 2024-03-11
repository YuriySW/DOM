'use strict';

const banner = document.querySelector('.ads');
const item = document.querySelectorAll('.item');
const itemTitle = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');
const propsItemFour = document.querySelectorAll('.props__item_four');
const listItem = document.querySelector('.item_two .content .props__list .props__item_four');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const appTextOne = document.querySelector(
  '.item_six .content .props__list .props__item:nth-child(9)'
);
const appTextTwo = document.querySelector(
  '.item_six .content .props__list .props__item:nth-child(10)'
);
const titleCloserAndObj = itemTitle[2];
const newTitile = document.createElement('h1');
const text = document.createTextNode('This и прототипы объектов');
const titleEsSix = itemTitle[1].textContent;
const titleScopeAndCloser = itemTitle[3].textContent;
const newTitleScopeAndCloser = itemTitle[3].textContent;
const titleAsync = itemTitle[4].textContent;

// Перенес строку 'Глава 4. Преобразование типов'

propsItemFour[2].before(listItem);

// Перенес строку 'Приложение А. Дальнейшее изучение Приложение Б. Практика.'

propsItemTwo[7].after(appTextOne);
propsItemTwo[8].after(appTextTwo);

// Поменял props__list местами

itemTitle[2].after(propsList[4]);
itemTitle[3].after(propsList[3]);

// Удалил баннер

banner.remove();

// Поменял карточки

item[3].after(item[0]);

// Поменял заголовок у JS

newTitile.append(text);
titleCloserAndObj.replaceWith(newTitile);

// Поменял заголовки

itemTitle[1].textContent = titleScopeAndCloser;
itemTitle[3].textContent = titleEsSix;

itemTitle[3].textContent = titleAsync;
itemTitle[4].textContent = newTitleScopeAndCloser;
