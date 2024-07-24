const arr1 = ['hello', 34562, false , true]

console.log(arr1);
console.log(typeof arr1);
console.log(Array.isArray(arr1));

const movies = ['dangal','kill','Manjhi','DDJL','Jawan','PK'];

console.log(movies.length); 
// indexing
console.log(movies[3]);
console.log(movies.at(-6));

movies[3] ='krish';
console.log(movies);
console.log(movies.indexOf('kill'));

// slicing

console.log(movies);
console.log(movies.slice(2,5));
console.log(movies.slice(2,-3));
console.log(movies.slice(2));

// adding  and moving element
movies.push('kalki'); //add element at the last 
console.log(movies);

movies.unshift('kgf')  //adding element at start 
console.log(movies);

movies.pop();  //removes element from end
movies.shift(); //remove element from start

console.log(movies);

// movies.splice(3,2); //removes 2 element starting from index 3 
movies.splice(3,0,'deadpool','venom'); //replacing element
console.log(movies);

length