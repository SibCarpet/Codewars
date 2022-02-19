/*
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

let names = ["Alex", "Jacob", "Mark", "Max"];

const whoLikesIt = function (names) {
  let length = names.length;

  if (length === 0) {
    return 'no one likes this';
  } else if (length === 1) {
    return names[0] + ' likes this';
  } else if (length === 2) {
    return names[0] + ' and ' + names[1] + ' like this';
  } else if (length === 3) {
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  } else if (length > 3) {
    return names[0] + ', ' + names[1] + ' and ' + (length - 2) + ' others like this';
  }
};