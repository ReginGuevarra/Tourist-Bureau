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
