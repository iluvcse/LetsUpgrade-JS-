let n = Number(prompt("Give a positive input:"));
let i;
let arr = [];
for(let i=1;i<=n;i++){
    let input = Number(prompt("Enter a number:"));
    arr.push(input);
}
let odd = arr.filter(el=>el%2!=0);
console.log(odd);
let oddCubes = arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(oddCubes);