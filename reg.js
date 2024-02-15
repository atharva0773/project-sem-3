var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");

var length = document.getElementById("length");
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  myInput.onkeyup = function() {
    // Validate all alphabets
    var allAlphabets = /^[a-zA-Z]+$/;
  
    // Check if the input value contains only alphabets
    if (myInput.value.match(allAlphabets)) {
      // If all alphabets are present, update the styling for validation
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      // If there are non-alphabetic characters, update the styling for validation
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    if(myInput.value.length >= 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
  }
  
