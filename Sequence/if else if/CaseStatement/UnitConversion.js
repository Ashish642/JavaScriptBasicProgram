// Unit conversion by switch case

   
let function_To_Be_Perform = 3;
let input = 48;
switch (function_To_Be_Perform) {
    case 1:
        let input_Feet_For_Inch = input;
        one_Feet_Equal_Inch = 12;
        console.log(input_Feet_For_Inch + " feet is " + input_Feet_For_Inch * one_Feet_Equal_Inch + " inch");
        break;
    case 2:
        let input_Inch = input;
        one_Feet_Equal_Inch = 12;
        console.log(input_Inch + " inch is " + input_Inch / one_Feet_Equal_Inch + " feet");
        break;
    case 3:
        let input_Feet_For_Meter = input;
        one_Feet_Equal_Meter = 0.3048;
        console.log(input_Feet_For_Meter + " feet is " + input_Feet_For_Meter * one_Feet_Equal_Meter + " meter");
        break;
    case 4:
        let input_Meter = input;
        one_Meter_Equal_Feet = 0.32804;
        console.log(input_Meter + " feet is " + input_Meter * one_Meter_Equal_Feet + " feet");
        break;
    default:
        console.log("Entered wrong number...");

}
