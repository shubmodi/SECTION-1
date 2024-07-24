// WAP to print all prime numbers in a range.
const prime_number_in_rang = (range1,range2) => {
    let number = []
        for(let i=range1; i<=range2; i++){
            x=0;
            for(let j=2; j<(i/2); j++){
                if(i%j === 0){
                    x=1;
                }
            }
            if(x === 0){
                number.push(i);
            }
        
            }
    
            return number
    }
    prime_numbers= prime_number_in_rang(1,10)
    console.log(prime_numbers);
    
    
    //WAP to print all perfect squares in a range.
    
    const perfect_square_number_in_range = (perfect_number_range1,perfect_number_range2) =>{
        let number1=[]
        for( let i=perfect_number_range1; i< perfect_number_range2; i++){
        if( (i**0.5) === parseInt(i**0.5)){
            number1.push(i);
        }
            }
    
        return number1;
    }
    
    perfect_square= perfect_square_number_in_range(2,100);
    console.log(perfect_square);
    
    
    
    // 3. WAP to print all Fibonacci numbers below 100
    
    const fibonacci_series =(end_num1) =>{
        a = 0;
        b = 1;
    console.log(a);
    console.log(b);
    for(i = 1;i<=end_num1;i++)
    {
        next = a+b;
        if(next>=end_num1){
            break;
        }
    
        console.log(next);
        a=b;
        b=next;
    
    }
    }
    fibonacci_series(100)
    
    
    
    
    //WAP to check if a number is palindrome.
    const check_palindrome = (pnum) => {
        r=0;
        while(pnum>0){
    
            z=pnum%10;
            pnum=parseInt(pnum/10);
            r=r*10+z;
        }
    
        return r;
    }
    
    if(check_palindrome(345) === 345){
        console.log("Palendrome");
    }
    else{
        console.log("Not Palendrome");
    }

    // wap to print armstrong num


const check_armstrong = (arnum) => {
    let r=0;
    let z=0;
    let arm=0
    while(arnum>0){
        r = arnum%10;
        arnum=parseInt(arnum/10);
        z=z+(r**3);
    }
    return z;
}

if( 153 === check_armstrong(153))
{
    console.log('Armstrong number');

}else{
    console.log('Not Armstrong number');
}
    
    