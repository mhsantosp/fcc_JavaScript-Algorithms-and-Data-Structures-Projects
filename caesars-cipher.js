function rot13(str) {
  var i, j;
  str = str.split("");

  for (i = 0; i < str.length; i++) {
    if (str[i].match(/^[a-z0-9]+$/i)) {
      if (str[i].charCodeAt(str[i]) + 13 > 90) {
        str[i] = str[i].charCodeAt(str[i]) - 13;
      } else {
        str[i] = str[i].charCodeAt(str[i]) + 13;
      }
    } else {
      str[i] = str[i].charCodeAt(str[i]);
    }
  }

  var newStr = "";
  for (j = 0; j < str.length; j++) {
    newStr += String.fromCharCode(str[j]);
  }

  return newStr;
}

rot13("SERR PBQR PNZC");
