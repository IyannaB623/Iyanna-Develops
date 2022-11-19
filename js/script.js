function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }

const options = {method: 'GET', headers: {accept: 'application/json'}};

let votd = document.getElementById('votd')
let ref = document.getElementById('reference')

fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=daily', options)
  .then(data => data.json())
  .then(data => {
  console.log(data.verse.details);
  votd.innerText = data.verse.details.text;
  ref.innerText = data.verse.details.reference
}) 
  .catch(err => console.error(err));
