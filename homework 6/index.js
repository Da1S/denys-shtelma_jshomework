// const findLongestWord = function(string) {
//   return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// };



// console.log(
//   findLongestWord("There is the house where my family lives")
// ); 

// console.log(
//   findLongestWord("Kate likes dogs.   ")
// ); 

// console.log(
//     findLongestWord("George hasn’t finished his work yet ")
//   );

const findLongestWord = function (string) {
    let str = string.split(" ")
    let longest = 0
    let word = null
    for(let i = 0; i<str.length; i+=1){
        if(longest < str[i].length){
        longest = str[i].length;
        word = str[i];
        }

    }
    return word;
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'
