1.
*Answer: ReferenceError: greetign is not defined
*explanation: The variable name in the code is declared as "greetign" but used as "greetign". This will result in a ReferenceError because the variable "greetign" is not defined. 

2.*Answer: The answer is "12"
*explanation: In JavaScript, when you use the + operator with one or both operands as strings, it performs concatenation instead of addition. In this case, the number 1 is implicitly converted to a string to match the data type of the other operand "2", and they are concatenated together, resulting in the string "12".

3.
*Answer is: ["🍕", "🍫", "🥑", "🍔"]

*explanation:In the given code, the info.favoriteFood property is initially set to the first element of the food array, which is "🍕". Then, it is reassigned to "🍝". However, this reassignment only affects the info object and not the food array. Therefore, when you log the food array, it remains unchanged, and you will see the original array as the output.

4. 
*Answer is B: Hi there, undefined.

*explanation:In the provided code, the sayHi function expects a name argument, but when it's called with sayHi(), no argument is passed. In JavaScript, when you call a function without providing an argument that the function expects, the parameter name is treated as undefined. So, the function returns "Hi there, undefined" because it includes the undefined value in the string interpolation.

5.
*Answer is: 3

*explanation:In the given code, you start with a count variable initialized to 0 and an array nums containing four elements. The forEach method iterates over each element of the nums array. In the callback function, the if (num) condition checks if the current element num is truthy. Since 0 is considered falsy in JavaScript, it doesn't increment the count for the first element (0), but it does for the remaining three elements (1, 2, and 3), resulting in a final count value of 3, which is logged to the console.



