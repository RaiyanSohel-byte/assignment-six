1. What is the difference between var, let, and const?
   Ans: (i) var : 'var' is function scoped or global scoped if declared outside a function. If we declare a variable using 'var' inside a block scope, still we can access the variable globally. It can be redeclared in the same scope.
   (ii) let: 'let' is block scoped. It can not be redeclared in the same scope but we can change the value of the variable.
   (iii) const: 'const' is also block scoped but it can not be redeclared or it can not reassign values for primitive data types. We use it to store the values which we will not change further in the code.

2. What is the difference between map(), forEach(), and filter()?
   Ans: (i) forEach() : It executes a function for each elements in the array. It does not create another array. Return value is undefined.
   (ii) map() : It transforms the data of an array , creates a new array with the same length and stores them into the new array.
   (iii) filter() : It filters the data of an array according to the conditions given, creates a new array and stores the filtered data into the new array.

3. What are arrow functions in ES6?
   Ans: Arrow Function is a shorter way to write function in Javascript. We use '=>' syntax to write the arrow function. Arrow function does not have it's own 'this'.

4. How does destructuring assignment work in ES6?
   Ans: Using destructuring assignment, we can get values from an array directly using variables. We can also get values from an object by property name directly using destructuring assignment.
   Example: const [one,two,three] = ["Alim","Jalim","Dalim"];

5. Explain template literals in ES6. How are they different from string concatenation?
   Ans: Template literals are strings within back ticks(``). We can use variables in a string dynamically. We can also use multi line strings using template literals.We don't need to use extra + sign to concatenate strings. We can use ${variable} like this also we don't need to use extra \n to go to new line. It makes codes more organized and readable.
