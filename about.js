var name = "Shubham";
var my_number = 05;
var my_boolean = true;
var my_float = 27.5;
var a = 66;

console.log(typeof my_test);
console.log(typeof my_number);
console.log(typeof my_float);
console.log(typeof my_float);

a += 5;
console.log(a);

a -= 11;
console.log(a);

a /= 3;
console.log(a);

a %= 3;
console.log(a);

/* Example of AND */

console.log(5 != 5 && 6 == 6); /* = false*/
console.log(5 == 5 && 6 == 6); /* = true */

/* Example of OR */

console.log(5 != 5 || 6 == 6); /* =true */
console.log(5 == 5 || 6 == 6); /* =true */

/* Example of NOT */

console.log(!(5 != 5 && 6 == 6)); /* =true */
console.log(!(5 == 5 && 6 == 6)); /* =false */

if (5n) {
  console.log("Truthy Value");
} else {
  console.log("falsy Value");
}

if (0 > 1) {
  console.log("Truthy Value");
} else {
  console.log("falsy Value");
}

if (NaN) {
  console.log("Truthy Value");
} else {
  console.log("Falsy Value");
}

if ([]) {
  console.log("Truthy Value");
} else {
  console.log("Falsy Value");
}

if ("") {
  console.log("Truthy Value");
} else {
  console.log("Falsy Value");
}

var a = 35;
if (a < 20) {
  console.log("A is less than 20");
} else if (a > 20 && a < 30) {
  console.log("A is between 20 and 30");
} else if (a > 30 && a < 40) {
  console.log("A is between 30 and 40");
} else {
  console.log("This is a catch block");
}

console.log(typeof (11 + "11"));

console.log("23" - "15");
console.log(23 - 10);
console.log("23" - 10);
console.log(23 - "10");
console.log("23" + 10);
console.log(23 + "10");
console.log("23" + "10");
console.log("23" + "10" + "3");
console.log("23" - "10");
console.log("[]" - NaN);
console.log("" > []);

// Loops----------------------

for (i = 0; i < 10; i++) {
  console.log(typeof i);

  console.log("Value of I is " + i);
}

var a = ["sachn", "India", "9", 3.14, 8, "sachn", "India", "9", 3.14, 8];

// for (i = 0;i < a.length;i++)
// {
//     console.log(`Values are ${typeof (a[i])}`);

// }

//for each runs a function for every element in a array
a.forEach(function (
  elementsofarray /*in 1 itearion of array it become 1st e;lement of array so for every iteration it uses single value of array*/
) {
  console.log(elementsofarray);
});

a.forEach(function (m) {
  console.log(m);
});

// FUNCTIONs

function test1() {
  /* function declaration*/
  console.log("first statement");
  console.log("second statement");
}

test1(); /*function calling*/

// anonymous function is a function without name

(function () {
  /* function declaration*/
  console.log("first statement");
  console.log("second statement");
})(); /*function is called when we mention them in round brackets and even declare empty round brackets after it to call the function */

//Arrow function/fat arrow function/lambda function

var test2 = () => {
  /* function declaration*/
  console.log("arrow first statement");
  console.log("arrow second statement");
};

test2();

console.log(typeof test2);

// parameters are also called arguments

var greetings = "hello";
var test3 = () => {
  console.log("arrow statement");
  return `${greetings} Dazzler`; //consider backtickei.e`` as parseString
  /*In case of multile line return we wrap it in round brackets
        return (
            `${greetings} Dazzler`;
            `${greetings} Dazzler`
        )
    */
};

// console.log(test3); //here in console prints the return value from function and not the console statements written in function

// test3();
// let myName = test3()
// console.log(myName);

// arrow fn is a return type function  so if return is a single line we can do it without using {} and even mentioning the word return

var test4 = () => ` ${greetings} fans`;

let my = test4();
console.log(my);

var sayMyName = (myNameIs) =>
  `hello I am ${myNameIs}`; /*myName is a parameter taken in function here its a variable */

console.log(sayMyName("CR7"));

var subtraction = (a, b) => a - b;

var differ = subtraction(5, 2);
console.log(`difference is ${differ}`);

var celtoFar = (temp) => (temp * 9) / 5 + 32;

var fahrenheit = celtoFar(5);
console.log(`Fahrenheit value is ${fahrenheit}`);

var createNewUser = (lastname, userName = "John") =>
  `hello ${lastname} ${userName}`; //default value parameters should at ending of declaring parameters and even their value can be override

var newUsername = createNewUser("S");
var anotherUser = createNewUser("Swami", "Shubham");

console.log(newUsername);
console.log(anotherUser);

//SWITCH CASE----------------------------------------------------------------------------------

var sw = (val) => {
  switch (val) {
    case 0:
      console.log("Today is Sunday");
      break;
    case 1:
      console.log("Today is Monday");
      break;
    case 2:
      console.log("Today is Tuesday");
      break;
    case 3:
      console.log("Today is Wednesday");
      break;
    case 4:
      console.log("Today is Thrusday");
      break;
    case 5:
      console.log("Today is Friday");
      break;
    case 6:
      console.log("Today is Saturday");
      break;

    case 7:
      console.log("Enter day");
      break;

    default:
      console.log("You didnt pass a day Silly");
      break;
  }
};

sw(0);

// console.log(sw(0));

// While LOOP --------------------------------------------------------------------------------------

var whileArray = ["2", "3", 5, 7, 9, "Sarthak"];

// for (let index = 0; index < whileArray.length; index++)
// {
//     console.log('Value here=>', index);

// }

var index = 0;
while (index < whileArray.length) {
  console.log("Value here=>", index);
  index++;
}

// LET, CONST AND VAR---------------------------------------------------------------------------------------------

let studName = "Shresath";

{
  studName = "Satvik";
  console.log(studName);
}

console.log(studName);

studName = "Sweta";
console.log(studName);

// CLOSURE -----------------------------------------------------------------------------------

function first() {
  var randomTest = "Alok";
  function second() {
    console.log(randomTest);
  }

  return second;
}

var first_return = first();
console.log(first_return());

function val1(x) {
  let a = 15;
  console.log(x);

  return function val2(y) {
    return x + y + a;
  };
}
let b = 5;

var out = val1(b);

console.log(out(2));

function grandparents(params1) {
  console.log("print this");
  console.log(params1);
  return function parent(params2) {
    console.log(params2);
    return function child(params3) {
      return params1 + params2 + params3;
    };
  };
}

var catch_parent = grandparents(2);
var catch_child = catch_parent(3);
var final_result = catch_child(5);

console.log(final_result);

// function calling(params) {
//     params++;

//     // function y() {
//     //     while (params) {
//     //            return  params++
//     //         }

//     return function refresh() {
//         console.log('page is refreshed',params);

//     }

// }

// let y =0;

// function call(val) {
//         let val2 =val;
//       return function refresh (param) {
//           param = val2 + param;
//         console.log('page is refreshed', + param);
//         param++;
//      };

// }

// var x = call(y);
// var final = x(2);
// final;

// var z = x(y)
// console.log(z);

//      function call(val) {
//          let z = val;

//         switch (z) {
//             case 0:
//                 return console.log('Today is Sunday');
//                 break;
//             case 1:
//                 return console.log('Today is Monday');
//                 break;
//             case 2:
//                 return console.log('Today is Tuesday');
//                 break;
//             case 3:
//                 return console.log('Today is Wednesday');
//                 break;
//             case 4:
//                return console.log('Today is Thrusday');
//                 break;
//             case 5:
//                return console.log('Today is Friday');
//                 break;
//             case 6:
//                 return console.log('Today is Saturday');
//                 break;

//             case if(z>6):
//                 return console.log('Enter day');
//                 break;

//             default:
//                return console.log("You didnt pass a day Silly");
//                 break;
//           }

//         }

// var x = call(2);
// x;

// HOISTING -------------------------------------------------------------------------------------------------------------

this_is_a_function();
console.log(testThis);

var testThis = "Dazzler";

function this_is_a_function() {
  console.log("Ashish");
}

//  TIMING FUNCTIONS -------------------------------------------------------------------------------------

/*1.set Interval
2. set Timeout 
*/

// setInterval(() => {
//     console.log('this is interval');

// }, 5000);

// // set Interval excetute the code again and again after that mentioned time interval

// setTimeout(() => {
//     console.log('this is timeout');

// }, 3000);

// timeout only execute the code once after the mentioned time interval
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }

//   console.log("Hello");
// }

// x();

// EXCEPTION HANDLING ---------------------------------------------------------------------------------------------------------

// const errorHandlerFunction = () => {
//     console.log('Normal Error');

// }

// const getAllPokemon = async () => {
//     try {
//         const result = await fetch('https://pokeapi.co/api/v2/pokemon'); /*This is an API that returns a promise */
//         const pokemon = await result.json();
//         // checkAccess = user is not OfflineAudioCompletionEvent;
//         // return new Error('User is not Admin');
//         console.log('These are pokemon');
//         console.log(pokemon);

//     }
//     catch (vartest) {   /*here vartest is an variable it will contain whatever error we are getting from API */
//         // You handle error here
//         // errorHandlerFunction(vartest);

//     }
// }

// getAllPokemon();

// const checkPokemon = () => {
//     try {
//         getAllPokemon();
//     } catch (error) {
//         console.log('This is the error');
//         console.log(error);

//     }
// }

console.log("nandini");
setTimeout(() => {
  console.log("vedansh");
}, 0);

console.log("shubham");

// function time() {
//   let i = 0;
//   setInterval(() => {
//     i++;
//     if (i < 6) {
//       console.log("ahh");
//     } else {
//       clearInterval();
//     }
//   }, 1000);
// }
// time();
