var i = 0;
function change() {
  let doc = document.getElementById("color");
  let array = ["black", "blue", "brown", "green"];
  doc.style.backgroundColor = array[i];
  i = (i + 1) % array.length;
}
setInterval(change, 5000);