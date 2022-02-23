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
