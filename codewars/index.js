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