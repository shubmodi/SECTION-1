const nums = [1,4,16,63,36,52,18,17,81];
const perfect =[]

for(let i of nums){
    if(Number.isInteger(i**0.5)){
        perfect.push(i);
    }
}

console.log(perfect);


// WAP to create a new array containing 10% discounted price of an array

const prices = [100,210,280,399,550];
const discounted =[];

for(let p of prices){
    discounted.push(p*0.9);
}
console.log(discounted);

// map

const discountedprices = prices.map((p) => {return p*0.9});
console.log(discountedprices);

// square of no given in array

const num = [1,4,16,63,36,52,18,17,81];
const squarenum = num.map((a) => {return a**2});
console.log(squarenum);

const perfectnums = nums.filter((n)=>{return Number.isInteger(n**0.5)});
console.log(perfectnums);

const prices1 =['₹423.89','₹675.9','₹786.56','$654.99'];
const prices2 = prices1.map((p)=>{return parseInt(p.slice(1))});
console.log(prices2);


const names = ['ramu','suresh','ramesh','sidd'];
const names1 = names.filter((n)=>{return n.length >= 5});
console.log(names1);


const names2 = ['ramu','suresh','ramesh','sidd'];
const names3 = names2.map((b)=>{return b.toUpperCase()})
console.log(names3);








