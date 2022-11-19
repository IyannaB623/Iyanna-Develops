function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }

 const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=daily', options)
  .then(response => response.json())
  .then(response => console.log(response.verse.details))
  .catch(err => console.error(err));
  
