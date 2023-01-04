'use strict';

const { mainModule } = require('process');


function sortYear(arr) {
  return arr.sort((a,b) => compareYear(a,b));
}

function compareYear(a,b) {
  //do the thing
  return b.year - a.year;
}

function sortTitle(arr){
  return arr.sort((a,b) => compareTitle(a,b));
}

function compareTitle(a,b){
  let titleA = a.title.toLowerCase();
  let titleB = b.title.toLowerCase();
  titleA = titleA.replace(/^(a |an |the )/i, '');
  titleB = titleB.replace(/^(a |an |the )/i, '');
  return titleA.localeCompare(titleB);
}

module.exports = {sortYear, compareYear, sortTitle, compareTitle};
