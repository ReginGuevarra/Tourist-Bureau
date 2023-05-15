import { activities } from './activities.js';

window.onload = function () {
  // load the dropdown list
  initCategoryDropdown();
  // other stuff
};
function initCategoryDropdown() {
  // load the dropdown list
  let categories = [
    "Adventures",
    "Arts & Crafts",
    "Museums",
    "Wine Tastings",
    "Other",
  ];
  const categoryList = document.getElementById("myCategories");

  let length = categories.length;
  for (let i = 0; i < length; i++) {
    // create the option element and set the text and
    // value at the same time
    let theOption = new Option(categories[i]);
    // append the option as a child of (inside) the
    // select element
    categoryList.appendChild(theOption);
  }

  categoryList.onchange = initActivityDropdown;
}

function initActivityDropdown() {
  let selectedCategory = document.getElementById("myCategories").value;

  const myFilteredActivityArray = activities.filter(
    (act) => act.category == selectedCategory
  );

  const activityList = document.getElementById("myActivities");
  activityList.options.length = 0;

  let length = myFilteredActivityArray.length;
  for (let i = 0; i < length; i++) {
    // create the option element and set the text and
    // value at the same time
    let theOption = new Option( myFilteredActivityArray[i].name );
    // append the option as a child of (inside) the
    // select element
    activityList.appendChild(theOption);
  }

  activityList.onchange = displayInfo;
}

function displayInfo() {
  console.log('hello')
  

  // assign the current selected activity to a variable (using the value of the #activityList element)
  // find the activity from the activities array whose name matches the current selected activity variable
  // to find a matching name, use .filter
  // assign this matched activity to a new variable

  // assign #activityInfo element to a variable
  // change the .innerHTML of your element using that variable
  // change it to display all the info from the matched activity variable above

  
}


// if (1 === "1") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// function compareValues() {
//   let mynumber = Number(document.getElementById("myNumber").value);
//   alert(typeof mynumber);

//   if (mynumber === 1234) {
//     alert("These values are the same");
//   } else {
//     alert("These values are NOT the same");
//   }
// }

// let mycourses = [];

// if (mycourses) {
//   console.log("There are no values in thiss array");
// }
