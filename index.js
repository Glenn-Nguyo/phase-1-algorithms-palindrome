function isPalindrome(word) {
  // Write your algorithm here
  const values = word.split('')
  const reversevalues = values.reverse()
  const reverseString = values.join('')
  if(word == reverseString){
    return(true)
  }else{
    return(false)
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The values variable is to store the word split and render the information to the
  second variable which reverses it which then renders its values to be joined and finally it returns true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
