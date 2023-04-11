// Question 1

function add(a) {
  return function closAdd(b) {
    return a + b;
  };
}
let number1 = 8;
let number2 = 5;

let finalNumber = add(number1);
let lastNumber = finalNumber(number2);

console.log(finalNumber);
console.log(lastNumber);
//Question 2

function arraySearch(myArray, variable) {
  if (myArray.length === 0) {
    return false;
  } else if (myArray[0] === variable) {
    return true;
  } else {
    return find(myArray.slice(1), variable);
  }
}

let theArray = [6, 9, 4, 2, 0, 7, 4, 2, 7, 9, 1, 3];
let value = 4;

if (arraySearch(theArray, value)) {
  console.log(true);
} else {
  console.log(false);
}
// Question 3

function myParagraph(text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerText = text;
  document.body.appendChild(newParagraph);
}
myParagraph("This is a paragraph");


// Question 4

function myListItem(listItem) {
    let newListItem = document.createElement("li");
    newListItem.textContent = listItem;
    let newList = document.querySelector("ul");
    newList.appendChild(newListItem);
  }
  myListItem ("Biryani");
  // Question 4

function myListItem(listItem) {
    let newListItem = document.createElement("li");
    newListItem.textContent = listItem;
    let newList = document.querySelector("ul");
    newList.appendChild(newListItem);
  }
  myListItem ("Biryani");

  // Question 6
  function insert(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
let newObject = { name:"Ali Awj", age: 15 };
insert("newObject", newObject);
//Question 7
function toGet(myObject){
    localStorage.setItem("current object", JSON.stringify(myObject));
    let newObject = JSON.parse(localStorage.getItem("current Object"));
    return newObject;
    }
    let herObject= {name:"Atif",age:16};
    let latestObject = toGet(herObject);
    console.log(herObject);
//Question 8
function toGet(myObject){
    localStorage.setItem("current object", JSON.stringify(myObject));
    let newObject = JSON.parse(localStorage.getItem("current Object"));
    return newObject;
    }
    let herObject= {name:"Atif",age:16};
    let latestObject = toGet(herObject);
    console.log(herObject);