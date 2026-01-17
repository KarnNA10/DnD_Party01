/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

function cambiarPag(a){
    const valor = a.value;
    const valorInt = parseInt(valor)
    const A = `Parties/A_${valor}.json`;
    document.querySelector('.liiink').setAttribute("href",A)

    console.log(valor)
}