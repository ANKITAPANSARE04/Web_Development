/*Swip number in js*/
function test() {
    var a = "3";
    var b = "8";
var c = a;
    a = b;
    b = c;
    console.log("a is " + a);
    console.log("b is " + b);
}

/*BMI calculator*/
function bmiCalculator(weight, height) {
    var bmi = Math.floor(10 * weight/(height*height))/10;
    var interpretation = "Your BMI is " + bmi;
    if (bmi < 18.5) {
        interpretation += ", so you are underweight.";
    } else if (bmi <= 24.9) {
        interpretation += ", so you have a normal weight.";
    } else {
        interpretation += ", so you are overweight.";
    }
    return interpretation;
}
console.log( bmiCalculator(65, 1.8));

/*Leap year*/
function isLeap(year) {
    var isLeapYear = "Leap year.";
    var isNotLeapYear = "Not leap year.";
    var response = isNotLeapYear;
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          response = isLeapYear;
        }
      }
    }
    return response;
}
console.log(isLeap(2000)); // Leap
console.log(isLeap(2100)); // Not leap
console.log(isLeap(2400)); // Leap
console.log(isLeap(1989)); // Not leap
console.log(isLeap(1948)); // Leap

/*Random function in js*/
function whosPaying(names) {    return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!";}

/*
function fibonacciGenerator (n) {
    var fibSequence = [0, 1];
    if (n < 3) {
      return fibSequence.slice(0, n);
    }
    for (var i = 3; i <= n; i++) {
      var t = fibSequence.length;
      fibSequence.push(fibSequence[t - 1] + fibSequence[t-2]);
    }
    return fibSequence;
}
console.log(fibonacciGenerator(5));
console.log(fibonacciGenerator(1));
console.log(fibonacciGenerator(2));
