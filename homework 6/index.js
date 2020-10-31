const findLongestWord = function(string) {
  return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};



console.log(
  findLongestWord("There is the house where my family lives")
); 

console.log(
  findLongestWord("Kate likes dogs.   ")
); 

console.log(
    findLongestWord("George hasn’t finished his work yet ")
  );