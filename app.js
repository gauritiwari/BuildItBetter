function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function myFunction1() {
  var elmnt = document.getElementById("home");
  elmnt.scrollIntoView();
}
function myFunction2() {
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView();
}
function myFunction3() {
  var elmnt = document.getElementById("socities");
  elmnt.scrollIntoView();
}
function myFunction4() {
  var elmnt = document.getElementById("clubs");
  elmnt.scrollIntoView();
}
function myFunction5() {
  var elmnt = document.getElementById("studentchapters");
  elmnt.scrollIntoView();
}

