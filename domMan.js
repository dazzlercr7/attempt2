console.log("Hello from JS file");

// let firstExample = document.getElementById("IdDom").innerText;

// firstExample = "Lets Change it";
let firstExample = document.getElementById("IdDom");

// firstExample.innerText = "Lets Change it";

function clickHandler() {
  firstExample.innerText = "Lets Change it";
}

let secondExample = document.getElementsByClassName("fsjs");

// console.log(secondExample);

for (let index = 0; index < secondExample.length; index++) {
  //   console.log(`This is ${index} element`);

  if (index === 2) {
    function secondclick() {
      secondExample[index].innerText = "New working on third element";
      //   console.log(secondExample[index].innerText);
    }
  }
  //   console.log(secondExample[index]);
}

let tagExample = document.getElementsByTagName("div");
console.log(tagExample);

let elementExample = document.createElement("p");
elementExample.innerText = "Working on Inner text";
firstExample.appendChild(elementExample); //appended the para tag on div element  first Example

// ARRAY --------------------------------------------------------------------------------------------------------------------------

let thisIsArray = ["Sarthak", "Kanak", "Shreshtha", "Nandini"];

thisIsArray.length; //returns the number of elements in an array

console.log(thisIsArray.length);

console.log(thisIsArray.reverse());

let array2 = ["dazzler", "India", "Dog", "Toy"];

console.log(thisIsArray.concat(array2));

let iterable = thisIsArray.entries();

console.log(iterable.next()); //returns an object as o/p with an array and a boolean value (if value of boolean is false that means the next value in array still exist and true if no value is further present in array )

// console.log(iterable.next().value);
// console.log(iterable.next().done);

// console.log(iterable.next().value);
// console.log(iterable.next().done);

for (let item of iterable) {
  console.log(item);
}

console.log(...thisIsArray);

// Slice= takes upto 2 numerical parameters and returns an array that contains elements at indices specified by those 2 parameters

console.log(array2.slice(1));
// console.log(array2.slice(1, 3));  //first parameter is inclusive and second parameter is excluded
// console.log(array2.slice(-1));
// console.log(array2.slice(-2));
// console.log(array2.slice(-1, 3));
// console.log(array2.slice(-1, -3));
// console.log(array2.slice(1, -3));

const callbackFunction = (item) => item === "Sarthak"; //will only return a true it the string(Sarthak) matches with all the element of array otherwise it return false even if one element or no elementmatches

let result = thisIsArray.every(callbackFunction);

console.log(result);

// SPLICE---------------

let newVal = console.log(array2.splice(3, 1, "Varun", "Nandini"));
console.log(array2.length);
console.log(...array2);

//MAP------------------------------------------------------------------------------------------------------------------------------------------

/*execute a callback fn on every element of an array and returns an array  */

let array3 = [1, 2, 3, 4, 5, 6];

const varName2 = (item2) => {
  console.log(item2);
  return item2;
};

let result1 = array3.map(varName2);

console.log(result1);

// function callback2(item) {
//   console.log(item);
//   return "This is running";
// }

// const varName = (arguments) => {
//   console.log("hello");
//   return 1;
// };

//FILTER--------------------------------------------------------------------------------------------------------------------

/*filter runs a callback on everyelement of the array and returns an array of elements that return true for callback */

function callingbackFunction(item) {
  return item === 4;
}

let result2 = array3.filter(callingbackFunction);
console.log(result2);

array4 = [11, 7, 8, 1, 12];

let result3 = array4.filter(
  (item) => item > 5
); /* can be written as let result3 = array4.filter(item => item > 5); */
console.log(result3);

//EVERY -----------------------------------------------------------------------------------------------------------------------------------------
/* The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */

const isBelowThreshold = (currentValue) => currentValue < 40;

const array5 = [1, 30, 39, 29, 10, 13];

console.log(array5.every(isBelowThreshold)); // expected output: true

//SORT ----------------------------------------------------------------------------------------------------------------------------------------------------------

const array6 = [16, 11, 14, 13, 12, 15, 10];

function calbackFunction2(a, b) {
  //a and b are first and second element of array and hume value humse positive ya negative ya zero lani hai for sorting to work
  //1.less than 0 = descending
  //2.equal to than 0 = no change
  //3.greater than 0 = ascending
  return a - b;
}

array6.sort(calbackFunction2);
console.log(array6);

array7 = [11, 7, 8, 1, 2, 4, 12];

let result4 = array7.filter((item) => item > 5);
console.log(result4.sort((a, b) => b - a));

console.log(array7.filter((item) => item > 5).sort((a, b) => a - b));

// REDUCE -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*reduces an array into a single value based on the (2= accumulator,item) parameters you pass in the callback function and an optional starting value for  */

array8 = [70, 65, 55, 48, 76, 78, 80];

// array8.reduce((accumulator, item) => {
//   return accumulator + item, 0;
// });

console.log(array8.reduce((accumulator, item) => accumulator + item, 0)); //here 0 is an optional value and starting value of accumulator = 0 and item value will be 70, if we do not mention this optional value the accumulator takes value as 70 and item as 65

//OBJECTS --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let testObject = {
  studentName: "CR7",
  age: 37,
  favoriteManager: "Sir Ferguson",
};

console.log(testObject.studentName);
console.log(testObject.favoriteManager);

testObj2 = {
  address: {
    streetName: "Ashokvan",
    city: "Mumbai",
  },

  students: ["stud1", "stud2", "stud3"],
};

console.log(testObj2.students);
console.log(testObj2.address.streetName);

// if (testObj2.address.country == undefined || testObj2.address.country == null)  console.log(This is working);

let arraytoTest = [
  {
    studentsName: "Dazzlercool",
    favouriteVideoGame: "DOTA2",
    rank: "divine",
    randomNumber: 7,
  },
  {
    studentsName: "Mayank",
    favouriteVideoGame: "Sonic",
    rank: "Pro",
    randomNumber: 3,
  },
  {
    studentsName: "Alok",
    favouriteVideoGame: "Mario",
    rank: "Expert",
    randomNumber: 8,
  },
  {
    studentsName: "Satvik",
    favouriteVideoGame: "Ludo",
    rank: "Master",
    randomNumber: 5,
  },
  {
    studentsName: "Deepak",
    favouriteVideoGame: "PUBG",
    rank: "Conquerer",
    randomNumber: 12,
  },
];

console.log(
  arraytoTest
    .sort((a, b) => a.randomNumber - b.randomNumber)
    .map((item) => {
      return {
        ramnumber: item.randomNumber,
        stuNam: item.studentsName,
      };
    })
);

// create an array of object with only two properties == first, the random number in ascending order and den the student name to be consoled

//EVENT LOOP ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Call stack works on First In Last Out
// Call Stack is made up of Event Loop

// Event Loop is a process of taking the execution context in call stack and exe uting it in execution queue

let usersArray = [
  {
    id: 1,
    name: "Piyush",
    leaves: [
      {
        id: 1,
        reason: "Party",
        dates: ["2022-02-25", "2022-02-24"],
      },

      {
        id: 2,
        reason: "Movie",
        dates: ["2022-02-20", "2022-02-21", "2022-02-22"],
      },
    ],
  },
  {
    id: 2,
    name: "Vedansh",
    leaves: [
      {
        id: 3,
        reason: "Sick",
        dates: ["2022-02-10", "2022-02-12"],
      },

      {
        id: 4,
        reason: "Break",
        dates: ["2022-02-15", "2022-02-08", "2022-02-17"],
      },
    ],
  },
  {
    id: 3,
    name: "Nandini",
    leaves: [
      {
        id: 5,
        reason: "Study",
        dates: ["2022-02-05", "2022-02-19"],
      },
    ],
  },
];

// write a fn that shows the user that have taken leave between start and end date (user id ,name, leaves(dates,reason))
