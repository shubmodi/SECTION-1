const user ={
    name : 'raju',
    email : 'raju@gmail.com',
    password : 'abc123'

};
console.log(user.email);
console.log(user['name']);

user.email = 'raju007@gmail.com';
console.log(user);

user.address = 'lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const brand = 'samsung';
const model = 'S24';
const price = '10000000';
const color = ['red','black','white'];

const smartphones ={brand,model,price,color};
console.log(smartphones);

const { address } = user;
console.log(address);
console.log(smartphones.price);
console.log(smartphones.color[1]);

smartphones.color.push('grey');
console.log(smartphones.color);

smartphones.color.splice(2,1,'moonwhite');
console.log(smartphones.color);

const smartphoneslist =[
    {
        brand : 'samsung',
        model : 's24',
        price : 1000000,
        color : ['red','black','green']
}
,
    {
        brand : 'apple',
        model : '12',
        price : 120000,
        color : ['black','green']
}
,
    {
        brand : 'oneplus',
        model : '13',
        price : 30000,
        color : ['red','green']
}
,
    {
        brand : 'motorola',
        model : 'g6',
        price : 12000,
        color : ['black','green']
}
,
    {
        brand : 'google',
        model : 'pixel 8',
        price : 56000,
        color : ['black','blue','orange']
}
];

// 1. access the price of apple iphone
// 2. access the last color of google

console.log(smartphoneslist[1].price)
console.log(smartphoneslist[3].color.at(-1))

const myphones = smartphoneslist.filter((phone) =>{return phone.price<=50000}) 
console.log(myphones);

const myphones2 = smartphoneslist.filter((phone) =>{return phone.brand =='samsung'}) 
console.log(myphones2)

const query = 'sam'
const myphones3= smartphoneslist.filter((phone) =>{return phone.brand.toLowerCase().includes(query.toLocaleLowerCase())}) 
console.log(myphones3);
const myphones4= smartphoneslist.filter((phone) =>{return phone.color.includes('green')});
console.log(myphones4);








