console.log("The actual salary is: 100");
let sales = Number(prompt("Enter No. of Sales:"));
if(sales>0 && sales<=5000){
    let commission = 100+((2/100)*100);
    console.log("New commission is "+commission);
}
else if(sales>5001 && sales<=10000){
    let commission = 100+((5/100)*100);
    console.log("New commission is "+commission);
}
else if(sales>10001 && sales<=20000){
    let commission = 100+((7/100)*100);
    console.log("New commission is "+commission);
}
else{
    let commission = 100+((10/100)*100);
    console.log("New commission is "+commission);
}
