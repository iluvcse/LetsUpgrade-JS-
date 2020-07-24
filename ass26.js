let user = prompt("Enter user name:");
document.write("Welcome "+user);
setInterval(displayClock,1000);
function displayClock(){
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    document.getElementById('time').innerHTML = hrs +":"+min +":"+sec;
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 