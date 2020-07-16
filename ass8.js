/* Strings:
   1.substring() :- Extracts the characters from a string, between two specified indices.
   2.slice() :- Extracts a part of a string and returns a new string.
   3.replace() :- Searches a string for a specified value, or a regular expression, and returns a new string 
                  where the specified values are replaced. */


let str = "Hello LetsUpgrade";
let res = str.substring(4,12);
console.log(res);



let str1 = "Hello World!";
let res1 = str1.slice(5,11);
console.log(res1);



let str2 = "Visit Amazon";
let res2 = str2.replace("Amazon","LetsUpgrade");
console.log(res2);




/* Arrays: 
   1.toString() :- converts an array to a string of (comma separated) array values.
   2.join() :- The join() method also joins all array elements into a string.
               It behaves just like toString(), but in addition you can specify the separator.
   3.splice() :- The splice() method can be used to add new items to an array.
                 The splice() method returns an array with the deleted items.
   4.slice() :- The slice() method slices out a piece of an array into a new array.
*/


let arr = ["Black","White","Blue","Pink"];
let result = arr.toString();
console.log(result);

let result2 = arr.join("*");
console.log(result2);

let result3 = arr.splice(2,3,"Green","Yellow");
console.log(result3);

let result4 = arr.slice(2);
console.log(result4);



            



 
