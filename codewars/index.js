//Duplicate Encoder
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }

//Sort the odd
function sortArray(array) {
  // filter odd numbers and sort them
  // loop through array
  // if array[num] is even, shift odd number infront of even number
  //    else continue array loop
  let odd = array.filter((x) => x %2).sort((a,b) => a-b)
  return (array.map(num => num %2 ? odd.shift() : num))
}


//Turn number into string to be able to split them up in a array
function digitize(n){
  //code here
  let arr = n.toString().split('').reverse()
  return arr.map(num => Number(num))
}


//A Needle in the Haystack 8Kyu
function findNeedle(haystack) {
  // your code here
  return `found the needle at position ${haystack.indexOf('needle')}`
}

//Abbreviate a Two Word Name
function abbrevName(name){

  // code away
/*
Turn Name into array split by words except letters
Capitalize all letters
Grab the start of both words
Add both letters into string
*/
let word = name.toUpperCase().split(' ')
return `${word[0].charAt(0)}.${word[1].charAt(0)}`
}

//Odd or Even
function oddOrEven(array) {
  //enter code here
/*
Use reduce to add all array nums together
Requirement remainder must reach 0 to return even
If not, return odd
*/
return array.reduce((a,b) => a + b, 0) % 2 === 0? 'even':'odd'
}


//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  //if bool === true return yes if false return no
  return bool === true? 'Yes':'No'
}


//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  /*
  Turn this string into array
  for each word capitalize the first letter and combine it with the original word(with removed first letter)
  return the string
  */
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
};

//Categorize New Member
function openOrSenior(data){
  //data[0][age, handicap]
  /* 
  if age is 55 or greater and handicap is more than 7 return senior
  else return open
  */
  let crew = []
  data.map(mem => mem[0] >= 55 && mem[1] > 7? crew.push('Senior') : crew.push('Open'))
  return crew
}