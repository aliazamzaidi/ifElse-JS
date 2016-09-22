var a = parseInt(prompt("Enter Your Percentage?","Your Percentage"));
if (a > 90 && a < 100){
    document.write("A+ Percentage");
}
else if (a > 80  && a < 90){
    document.write("A Percentage");
}
else if (a > 70  && a < 80){
    document.write("A Percentage");
}
else if (a > 60  && a < 70){
    document.write("B Percentage");
}
else if (a > 50  && a < 60){
    document.write("A Percentage");
}
else {
    document.write("Failed");
}