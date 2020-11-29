function convertToRoman(num) {
  //Matriz para los números romanos, ordenados de mayor a menor
  var romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  //Matriz para los números decimales, ordenados de mayor a menor de acuerdo a su respectivo equivalente en número romano
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  //Se inicializa vacio, para que luego nos muestre el número romano equivalente al del valor del número decimal ingresado
  var equivalentRoman = "";

  //Recorre la matriz de decimales.
  for (var i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      equivalentRoman += romanNumerals[i];
      num -= decimals[i];
    }
  }
  return equivalentRoman;
}

convertToRoman(36);