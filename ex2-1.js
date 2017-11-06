document.writeln("Looping a triangle<br>");
var ten = "#";
var temp = 0;
var temp2;
do {
    temp = temp + 1;
    for (temp2 = 1; temp2 <= temp; temp2++) {
      document.write(ten);  
    } 
    document.writeln("<br>");
    //document.writeln(temp);
    //document.writeln(temp2);
} while(temp < 8);
