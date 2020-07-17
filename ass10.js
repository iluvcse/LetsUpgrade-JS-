let num = Number(prompt("Input a Number:"));
function check(){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
let result = check();
console.log(result);