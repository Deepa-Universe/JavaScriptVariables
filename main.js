//Variable

//Let 
//Define Variable

//Exception throw
//console.log(firstVariable); //Cannot access 'firstVariable' before initialization
let firstVariable = 10;
console.log(firstVariable); //10

//Exception throw
//let firstVariable = 20; //Identifier 'firstVariable' has already been declared

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Var
//Define Variable

//Exception throw 
//var firstVariable = 20; //Identifier 'firstVariable' has already been declared, even with different key words same variable names cannot be used.

console.log(intValue2); //For 'Var' if variable is called before initialization, it gives 'Undefined'
var intValue2 = 20;
console.log(intValue2); //20

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Const
//Define Variable

//Exception throw
//console.log(intValue3); //Cannot access 'intValue3' before initialization

//Exception throw
//const intValue2 = 40; //Identifier 'intValue2' has already been declared
const intValue3 = 30;

//Error throw
intValue3 = 50; //Assignment to constant variable.
console.log(intValue3);
