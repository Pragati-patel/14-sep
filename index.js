// this is for hamburger menu
function myFunction() {
    //   document.getElementById("myLinks").style.display="flex";
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }