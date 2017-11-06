//FizzBuzz - Exercise 2-2

document.write("Ex 2-2 - FizzBuzz <br>");
var temp;
for (temp = 1; temp <= 100; temp++) {
    if (temp % 15 == 0) document.write("FizzBuzz<br>");
    else if (temp % 5 == 0) document.write("Buzz<br>");
    else if (temp % 3 == 0) document.write("Fizz<br>");
    else document.write(temp + "<br>");
}