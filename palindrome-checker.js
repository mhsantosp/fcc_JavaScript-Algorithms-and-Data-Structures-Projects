function palindrome(str) {

  var re = /[\W_]/g;
  var clean = str.replace(re, "");
  var final = clean.toLowerCase();

  var reverse = final.split("").reverse().join("");

  if (reverse != final) return false;

  return true;
}

palindrome("eye");
