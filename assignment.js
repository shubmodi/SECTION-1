let arr =[4,5,6,3];
let arr2 = [];
let arr1 = [];
for(let i=0; i<arr.length ; i++){
    console.log((arr[i])**2);
    arr2.push((arr[i])**2);
}
console.log(arr2);
arr1 = arr2.reverse();
console.log(arr1);



// wap to print even no in array
console.log();
let num =[4,6,7,3,9,8]
for(let i=0; i<num.length; i++){
if(num[i]%2===0)
    console.log(num[i]); 
}

// WAP to create a new array containing only perfect squares from another array.
console.log();
let num1 =[4,6,7,3,9,8];
let num2 = [];
for(let i=0;i<num1.length;i++){ 
    if( num1[i]**0.5 === parseInt(num1[i]**0.5) ){
    num2.push(num1[i]);
    }
}

console.log(num2);

// WAP to create a new array containing 10% discounted prices from an array of prices.

console.log();
let num3 =[4,6,7,3,9,8];
let num4 = [];

for(let i=0;i<num1.length;i++){ 
    p = (num3[i]*10)/100;
    num4.push(num3[i]-p);
     
    }
    console.log(num4);
    






