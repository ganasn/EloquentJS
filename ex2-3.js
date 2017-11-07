//Exercise 2-3 Chess Board

document.write("Chess Board (Non-Optimized)<p>");
var row = 0;
var column = 0;
var size = 8;
var hash = true;
for (row = 0; row < size; row++) {
    if (row % 2 == 0) hash = true; 
    else hash = false;
    for (column = 0; column < size; column++) {
        if (column % 2 == 0 && hash) 
            document.write("#");
        else if (column % 2 != 0 && hash) 
            document.write("1");
        else if (column % 2 == 0 && !hash)
            document.write("1");
        else if (column %2 !=0 && !hash)
            document.write("#");
    }
    document.write("<br>");
}