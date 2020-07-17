let os = prompt("What's your os and version?");
let res = os.split(/[\s]+/);
console.log("The OS name is "+os.split(" ",1)+" and version is "+res[res.length-1]);

