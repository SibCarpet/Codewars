let numbers = [19, 5, 42, 2, 77];
function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort((a,b)=>a-b);
  return numbers.slice(0, 2).reduce((sum, current)=>sum + current);
};
sumTwoSmallestNumbers(numbers);