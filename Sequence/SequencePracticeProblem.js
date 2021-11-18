console.log("Sequence Practice Problem....");

//problem-1: Print a single digit nuber
console.log("+++++++++++++++++++++++++++++++++++++++");
let single_Digit = Math.floor(Math.random() *10);
console.log("Single Digit number is : "+single_Digit);

// Problem-2: Print a disc number from  1-6 using random
console.log("+++++++++++++++++++++++++++++++++++++++");
let Dice = Math.floor(Math.random() * 6 ) + 1;
console.log("Dice Number is : "+Dice);

//Problem-3: Add two Random Dice Number and Print the Result
console.log("++++++++++++++++++++++++++++++++++++++++++++");
let Dice1 = Math.floor(Math.random() * 6) + 1;
let Dice2 = Math.floor(Math.random() * 6) + 1;
console.log("Dice Number Are : "+Dice1+" And "+Dice2);
let Result = Dice1+ Dice2;
console.log("Addtion of Two random Dice is :" +Result);

//Problem-4:Write a program that reads 5 random 2 Digt value , then find their sum and the average
console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

let Random1= Math.floor(Math.random() * 90)+10;
let Random2 = Math.floor(Math.random() * 90)+ 10;
let Random3= Math.floor(Math.random() * 90)+10;
let Random4 = Math.floor(Math.random() * 90)+ 10;
let Random5= Math.floor(Math.random() * 90)+10;
console.log("Two digit Number are  : "+"Random1+","+Random2+","+Random3+","+Random4+","+Random5+")
let sum = Random1+Random2+Random3+Random4+Random5;
console.log("Sum of five Number are : "+Sum);
let average = Sum /5;
console.log("Average of Five number is : "+average);

//Problem-5 Unit conversion
// Conversion of Inches into feets
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
let One_Feet = 12;// 1 feet = 12 inches
let One_Meter = 3.28; // 1 meter  = 3.28 feet
let Total_Plots = 25;
let feet = 42 / One_Feet;
console.log("42 inches in feet  is : "+feet);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// conversion of  Rectangular  plot from  feets to meters
let length = 60;//
let length = 40;//
console.log("Length and Width are "+length+ "and" +width);
let Area_In_Feets = length* width;
console.log("Area of plot in frrts is : "+Area_In_Feets);
let Area_In_Meter = Area_Feets / One_Meter;
console.log("Area of plot in meters is : "+Area_In_Meter);
let Total_Area = Area_In_Meter * Total_Plots;
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");