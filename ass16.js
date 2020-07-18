let input = prompt("Enter Input:");
if(input=='+'){
    let n1 = Number(prompt("Enter first number:"));
    let n2 = Number(prompt("Enter second number:"));
    function add(n1,n2){
        return n1+n2;
    }
    console.log(add(n1,n2));
}
if(input=='-'){
    let n1 = Number(prompt("Enter first number:"));
    let n2 = Number(prompt("Enter second number:"));
    function sub(n1,n2){
        return n1-n2;
    }
    console.log(sub(n1,n2));
}
if(input=='*'){
    let n1 = Number(prompt("Enter first number:"));
    let n2 = Number(prompt("Enter second number:"));
    function mul(n1,n2){
        return n1*n2;
    }
    console.log(mul(n1,n2));
}
if(input=='/'){
    let n1 = Number(prompt("Enter first number:"));
    let n2 = Number(prompt("Enter second number:"));
    function div(n1,n2){
        return n1/n2;
    }
    console.log(div(n1,n2));
}
if(input=='sqrt'){
    let n = Number(prompt("Enter a number:"));
    console.log(Math.sqrt(n));
}
if(input=='percent'){
    let obtained = Number(prompt("Enter Obtained:"));
    let total = Number(prompt("Enter total:"));
    function per(obtained,total){
        return (obtained*100)/total;
    }
    console.log(per(obtained,total)+"%");
}