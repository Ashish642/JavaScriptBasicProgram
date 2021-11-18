console.log("If-else Practice Problem .......");
// Flip coin  Print Heads or Tails
let Coin = Math.floor(Math.random() * 2);
if(Coin==0)
{
    console.log("Tails");

}else
{
    console.log("Heads");

}

// Leap Year check
const year = 2020;
const year = 2021;
 function LeapYear(Y)
 {
     if(Y%4 ==0)
     {
         console.log("THis Year "+Y+" is a leap Yeaer");

     }else{
         console.log("The Year"+Y+"is not a leap Year");

     }
 }
 // Calling Function and Passing years
 LeapYear(year1);
 LeapYear(year2);

 // Day of Month
 let date_Form = new Date("Mar2020");
 let date_To = new Date("jun2020");
 if (user_Date > date_Form && user_Date < date_To) {
     console.log("true");

 }
 else{
     console.log("false");
 }

 // Maximum And Minimum of three digit value
 
   
let number_1 = Math.floor(Math.random() * 899) + 100;
let number_2 = Math.floor(Math.random() * 899) + 100;
let number_3 = Math.floor(Math.random() * 899) + 100;
let number_4 = Math.floor(Math.random() * 899) + 100;
let number_5 = Math.floor(Math.random() * 899) + 100;
let maximum=0;
let minimum=999;

if(number_1 > number_2 && number_1 > number_3 && number_1> number_4 && number_1 > number_5)
maximum=number_1;
else if(number_2 > number_3 && number_2 > number_4 && number_2 >number_5)
maximum=number_2;
else if(number_3>number_4 && number_3 > number_5)
maximum=number_3;
else if(number_4>number_5)
maximum=number_4;
else
maximum=number_5;

if(number_1 < number_2 && number_1 < number_3 && number_1< number_4 && number_1 < number_5)
minimum=number_1;
else if(number_2 < number_3 && number_2 < number_4 && number_2 <number_5)
minimum=number_2;
else if(number_3<number_4 && number_3 < number_5)
minimum=number_3;
else if(number_4<number_5)
minimum=number_4;
else
minimum=number_5;

console.log("\nThe maximum of "+number_1+","+number_2+","+number_3+","+number_4+","+number_5+" is "+maximum);
console.log("\nThe minimum of "+number_1+","+number_2+","+number_3+","+number_4+","+number_5+" is "+minimum);