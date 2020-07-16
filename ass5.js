/* var :- The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the
           value of that variable.
                 . Variable declarations are processed before the execution of the code.
                 .  The scope of a JavaScript variable declared with var is its current execution context.
                 . The scope of a JavaScript variable declared outside the function is global. */

var a = 10;
console.log(a);


/* Let :- The let statement declares a local variable in a block scope. It is similar to var, in that we can 
          optionally initialize the variable.
                 . The let statement allows you to create a variable with the scope limited to the block on which it
                   is used.
                 . It is similar to the variable we declare in other languages like Java, .NET, etc. */

var name = "Honey";
{
    let name = "Baby";
    console.log(name);     //Here, it prints Baby.
} 
console.log(name);        //Here, it prints Honey.  



/* const :- const statement values can be assigned once and they cannot be reassigned. 
            The scope of const statement works similar to let statements.
            The code will throw an error when we try to reassign the existing const variable.*/


const age = 20;
console.log(age);

age = 21;    //throws an error: Uncaught TypeError: Assignment to constant variable.









