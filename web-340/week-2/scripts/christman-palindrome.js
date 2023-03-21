function getTodaysDate() {
		return date = new Date().toLocaleDateString("en-US");
	}


   function getLength(stringValue) {
      let lengthOfString = stringValue.length;
      return lengthOfString;
   }


   function reverse(stringValue) {
      let res = stringValue.split("");
      let newString = res.reverse();
      let combinedString = newString.join("");
      return combinedString.toLowerCase();

   }

   function isPalindrome(stringValue) {

      //Creating an empty results variable.
      let result = "";

      //If the reversed string is equal to itself, it will display a result based on
      //that.
      if (stringValue === reverse(stringValue)) {

         //Template literals enclosed with the backtick `. Important to not get it mixed
         //up with ''.
         result =  `${stringValue} is a palindrome!`;

      } else {

         result =  `${stringValue} is not a palindrome!`;

      }

      document.getElementById("palindrome-results").innerHTML = result;      

   }
  

function checkForPalindrome() {

   //Capturing inputted results and putting into variable txtPhrase.
   let txtPhrase = document.getElementById('txtPhrase').value.toLowerCase();

   //Create a variable today and assign it results from getTodaysDate function.
   let today = getTodaysDate();

   //Putting the length of what the user entered into the variable len.
   let len = getLength(txtPhrase);

   //Putting the reversed input into the variable reversedPhrase.
   let reversedPhrase = reverse(txtPhrase);

   //What will display to the user, based on what they entered into the field.
   let header = "Date: " + today + "<br>" + "Original Phrase: " + txtPhrase + "<br>" + 
               "Reversed Phrase: " + reversedPhrase + "<br>" + "Phrase Length: " + len;

   //Assigning the header variable to the assign-results-header div.         
   document.getElementById("assign-results-header").innerHTML = header;      



   isPalindrome(txtPhrase);
}
