for(let i=0;i<10;i++){
    console.log(i);
}

// wap to print all the no divisible by 7

for(let i=50;i<=100;i++)
{
    if(i%7===0)
    {
        console.log(i);
    }
}

// wap to print no divisible by 5&7

for(let i=50; i<=100; i++)
{
    if(i%5===0 && i%7===0)
    {
        console.log(i);
    }
}
// for of loop to traverse the array
console.log('------for of loop------');
const num =[3,5,8,3,2,1,7];
for(let i of num){
    console.log(i);
}


// while loop
console.log('------while loop------');
let a=10;
while(a<20)
{
    console.log(a);
    a++;
}


// do while loop
console.log('------do while loop------');
let b=10;
do{
    console.log(b);
    b++;
}
while(b<20);

