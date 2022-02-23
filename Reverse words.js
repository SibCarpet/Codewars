let str = "This is an example!";

//вариант №2
function reverseWords(str) {
  str = str.split(' ').reverse().join(" ").split("").reverse().join("");
return str;  
}
  
reverseWords(str);

//вариант №1
function reverseWords(str) {
  str = str.split(' ');
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    newStr[i] = str[i].split("").reverse().join("");
  }
  return newStr.join(" ");
}