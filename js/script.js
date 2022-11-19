function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }

var req = new XMLHttpRequest();
req.open('GET', 'http://labs.bible.org/api/?passage=votd&formatting=plain ', false);
req.send(null);
console.log(req.responseText);

let votd = document.getElementById('votd').innerText = req.responseText 
