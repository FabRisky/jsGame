'use strict';
let xhrBook = new XMLHttpRequest(),
    content = document.querySelector('#content');

xhrBook.addEventListener("load", onLoad);
xhrBook.open("GET","https://neto-api.herokuapp.com/book/");
xhrBook.send();

function onLoad() {
  let data = JSON.parse(xhrBook.responseText);
  let str = '';
  data.forEach(function (item) {
    str += `<li data-title="${item.title}" data-author="${item.author.name}" data-info="${item.info}" data-price="${item.price}"><img src="${item.cover.small}"></li>` 
  })
  content.innerHTML = str;
};

