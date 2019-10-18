/*#########################JAVASCRIPT######################### */
/* 21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe" */
var x = "John";
var y = "Doe";
console.log(x + " <> " + y);

/* 22) Create an object with properties such Name, Surname, Email */

var info = { Name: "Rasmus", Surname: "Meiencke", Email: "rasmusfabius@gmail.com" };

/* 23) Delete Email from the previously created object */

delete info.Email;

/* 24) Create an array with 10 strings in it */

var array = ["Rasmus", "Meinecke", "Carlos", "Luis", "Fiat", "Nissan", "Denmark", "Copenhagen", "Red", "Blue"];

/* 25) Print in the console every string in the previous array */

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
/* 26) Create an array with 100 random numbers in it */
var randomNumbers = [];
for (var i = 0; i < 100; i++) {
  var rnd = Math.random() * 100;
  randomNumbers.push(rnd);
}
console.log(randomNumbers);

/* 27) Wrote a function to get the MAX and the MIN from the previously created array */

function minMax() {
  var max = Math.max(...randomNumbers);
  var min = Math.min(...randomNumbers);
  console.log("the max value is " + max + " the minimun value is " + min);
}

/* 28) Create an array of arrays, in which every array has 10 random numbers */

var arrayOfArrays = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 5, 2, 8, 9, 2, 1, 7, 3], [4, 1, 6, 10, 10, 9, 2, 1, 2, 8]];

/* 29) Create a function that gets 2 arrays and returns the longest one */
var arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12];
var arrayTwo = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12];

function longest() {
  for (var i = 0; i < arrayOne.length; i++) {
    var arrayOneLength = arrayOne.length;
  }

  for (var i = 0; i < arrayTwo.length; i++) {
    var arrayTwoLength = arrayTwo.length;
  }

  if (arrayOneLength > arrayTwoLength) {
    return "ArrayOne is the longest";
  } else {
    return "ArrayTwo is the longest";
  }
}

/*30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values * */

var totalArrayOne = 0;
var totalArrayTwo = 0;

function sum() {
  for (var i = 0; i < arrayOne.length; i++) {
    totalArrayOne += arrayOne[i];
  }

  for (var i = 0; i < arrayTwo.length; i++) {
    totalArrayTwo += arrayTwo[i];
  }
  if (totalArrayOne > totalArrayTwo) {
    return "ArrayOne has the highest total sum";
  } else {
    return "ArrayTwo has the highest total sum";
  }
}

/*#########################DOM######################################## */
/* 31) Get element with ID "container" from the page */

var elementContainer = document.querySelector("#container");
console.log(elementContainer);

/* 32) Get every "td" from the page */
var everyTd = document.querySelectorAll("td");
console.log(everyTd);

/* 33) Create a cycle that prints the text inside every td of the page */

for (var i = 0; i < everyTd.length; i++) {
  console.log(everyTd[i].innerText);
}

/* 34) Write a function to change the heading of the page */

function heading(newHeading) {
  var headingText = document.querySelector("h1");
  headingText.textContent = newHeading;
}

/* 35) Write a function to add an extra row to the table */

function addRow(content) {
  var table = document.querySelector("table");
  var tr = document.createElement("tr");
  tr.innerHTML = content;
  table.appendChild(tr);
}

/* 36) Write a function to add the class "test" to each row in the table */

function addClass() {
  var tableTr = document.querySelectorAll("tr");
  for (var i = 0; i < tableTr.length; i++) {
    tableTr[i].classList.add("test");
  }
}

/*  37) Write a function to add a red background to every link in the page */

function addRedBackground() {
  var linkRed = document.querySelectorAll("a");
  for (var i = 0; i < linkRed.length; i++) {
    linkRed[i].style.backgroundColor = "red";
  }
}

/*  38) Console log "Page loaded" when the page is correctly loaded */

window.addEventListener("load", function() {
  console.log("Page loaded");
});

/*  39) Write a function to add new items to a UL */

function addNewUl(content) {
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  li.innerText = content;
  ul.appendChild(li);
}

/* 40) Write a function to empty a list */

function emptyList() {
  var li = document.querySelectorAll("li");

  for (var i = 0; i < li.length; i++) {
    li[i].remove();
  }
}

/*#########################EXTRA######################################## */

/* 41) Add an eventListener to alert when the mouse is over a link, displaying the URL */

var aHref = document.querySelectorAll("a");

for (var i = 0; i < aHref.length; i++) {
  aHref[i].addEventListener("mouseover", function() {
    // alert("The mouse is over the a tag");
  });
}

/*  42) Add a button to hide every image on the page */

var hideButton = document.querySelector("#hideImg");
var img = document.querySelectorAll("img");

hideButton.addEventListener("click", function() {
  for (var i = 0; i < img.length; i++) {
    img[i].classList.toggle("hide");
  }
});
/*  43) Add a button to hide and show the table from the page */

var hideButton = document.querySelector("#hideTable");
var table = document.querySelector("table");

hideButton.addEventListener("click", function() {
  table.classList.toggle("hide");
});

/*  44) Write a function to sum every number inside the TD (if the content is numeric) */

/*  45) Delete the last letter from the title each time the user clicks on it */

/*
        46) Change the a single TD backgrund color when the user clicks on it
        47) Add a button DELETE, on click it should delete a random TD from the page
        48) Add a pink border to a cell when the mouse is over
        49) Write a function to add a table with 4 rows and 3 lines programmatically
        50) Write a function to remove the table from the page
    -->
    */
