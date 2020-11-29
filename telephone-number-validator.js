function telephoneCheck(str) {
  var ck = -1;

  str = str.replace(/\s/g, "");

  var ar = str.match(/^1?(\()?\d{3}(\))?[\-|\s]?\d{3}[\-|\s]?\d{4}/);

  if (Array.isArray(ar)) {
    if (Array.isArray(ar) && ar[1] !== undefined && ar[2] !== undefined) {
      ck = 0;
    } else if (Array.isArray(ar) && ar[1] === undefined && ar[2] === undefined) {
      ck = 0;
    }
  }

  return ck === 0 && ar[0].length == str.length ? true : false;
}

telephoneCheck("555-555-5555");
