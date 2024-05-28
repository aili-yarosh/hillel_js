function isNaN(value) {
    var number = Number(value);
    
    return number !== number;
  }
  
  console.log(isNaN(NaN));          // true
  console.log(isNaN(123));          // false
  console.log(isNaN('abc'));        // true
  console.log(isNaN(undefined));    // true
  console.log(isNaN(null));         // false
  console.log(isNaN('123'));        // false
  console.log(isNaN(true));         // false
  console.log(isNaN(false));        // false
  console.log(isNaN(' '));