//function 1
function tellFortune(children_number,partners_name,geographic_location,job_title){
    console.log("you will have "+children_number+" children's and will partners name will be "+partners_name+" and your location will be  "+geographic_location+"  and your position is "+job_title );

}
tellFortune(2,"rudaina","Dubai","Asp.net developer");
// functtion 2
function calculateDogAge(age){

let dog_age=age*7;
if (age<0){
    console.log("plz insert positive value ")
}
else{
    console.log("Your doggie is "+ dog_age+" years old in dog years! ")

}

}
calculateDogAge(23)
//function 3 
function calculateSupply(age,AmountPerDay){
    const max_age=100;
    if (age>0){
        let left_age=max_age-age ;
        let Supply=left_age*AmountPerDay*360;
        console.log("You will need  " +Supply+ "  bottles of water  to last you until the ripe old age of 100")

    }
    else{
        console.log("plz insert positive value  ")
    }

}
calculateSupply(23,3)
//function 4
function greet (name){
console.log("Hello "+name );
}
greet("Rudaina")
/*
5
what is the error:
function double(cat) {
  return 2 * x;
} 1.used keyword as name function 2. x is not defined inside function , we should return 2*cat

function double(7) {
  return 2 * 7;
} 1.used keyword as name function  2. we should call function and send value 3. parameter is identifier constant, should be variable

function double('7') {
  return 2 * 'x';
} 1. wrong in parameter , should be variable not string value 2. we cant multiply number with string
*/


//fix these functions:
function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3(x)  {
  return 2 * x;
}
// function 7
function cube(num){
    console.log("the cubic number of  "+ num + " is : " + Math.pow(num,3) );

}
cube(4)
// function 8
function multiply(num1,num2){
    console.log("the multiplication of " + num1 +" & "+ num2 + " is: " +(num1*num2));

}
multiply(3,5);
//function 9
function canIGetADrivingLicense(age){
   
    if(age>=20){
        return "yes you can";
    }
else {
    let x=20-age;
    return "please come back after "+ x +" years to get one";
}
}
console.log (canIGetADrivingLicense(23));
//function 10
function sameLength(string1,string2){
    if (string1.length==string2.length){
        return true;
    }
    else{
        return false;
    }

}
console.log(sameLength("Rudaina","Alyasein"))
//function 11
function largerNumber(num1,num2){
    if (num1>num2)
        return num1
    else
    return num2
}
console.log("the larger number is :"+(largerNumber(4,9)));
//function 12 
function smallerNumber (num1,num2,num3){
    if (num2>=num1&& num3>=num1){
        return num1;
    }
    else if (num1>=num2 && num3>=num2){
        return num2;
    }
    else 
    return num3;
    
}
console.log("the saller number between 3 numbers is : "+smallerNumber(9,4,-4));
//function 13 
function shorterString (s1,s2,s3,s4,s5){
    let shortest_string=s1;
    if (shortest_string.length>s2.length){
        shortest_string=s2;
    }
    else if(shortest_string.length>s3.length){
        shortest_string=s3;
    }
    else if (shortest_string.length>s4.length){
        shortest_string=s4;
    }
    else if (shortest_string.length>s5.length){
        shortest_string=s5;
    }
  
    return  shortest_string;

}
console.log("the first shortest string is : " +shorterString("purpule","green","yellow","white","orange"));
//function 14
function longerString(s1,s2,s3,s4,s5){
    let longest_string=s1;
    if (longest_string.length<s2.length){
        longest_string=s2;
    }
    else if(longest_string.length<s3.length){
       longest_string=s3;
    }
    else if (longest_string.length<s4.length){
        longest_string=s4;
    }
    else if (longest_string.length<s5.length){
       longest_string=s5;
    }
  
    return longest_string;
}
console.log("the firstlongest string is : " +longerString("orange","green","yellow","white","purpule"));
//function 15
function isEven(num){
    if (num%2==0){
        return "True";
    }
    else 
    return "False";

}

console.log("this is number is Even : " +isEven(6));
//function 16
function isOdd(num){
    if (num%2!=0){
        return "True";
    }
    else {
        return "False";
    }
 

}

console.log("this is number is Odd : " +isOdd(7));
//function 17
function positive (num){
    return (Math.abs(num));
}
console.log("the positive value of the number is : "+positive(-3))
//function 18 
function fullName (firstName,lastName){
let Name=firstName + lastName;
return Name;

}
console.log( fullName("Rudaina ","Alyasein"));
//function 19
function average (num1,num2,num3,num4,num5){
    return ((num1+num2+num3+num4+num5)/5);

}
console.log("the average is :"+ (average(7,8,6,5,4)));
//function 20 
function randomNumber(){
   return(Math.random()) 
}

console.log("the random number that was generated is : "+randomNumber())

//function 21 
function randomBetweenNumbers(min, max) {
    // Round the min up to the nearest integer
    const minCeiled = Math.ceil(min);
    
    // Round the max down to the nearest integer
    const maxFloored = Math.floor(max);
  
    // Generate a random number with decimals between minCeiled and maxFloored
    return Math.random() * (maxFloored - minCeiled) + minCeiled;
  }
  
  console.log("The random number that was generated between 2 numbers is : " + randomBetweenNumbers(5.5, 8));
  
//function 22
function scoreInUniversty(grade){
    if (grade>=95&&grade<=100){
        return 'A';
    }
    else if (grade>=85&&grade<=94){
        return 'B';
    }
    else if (grade>=70&&grade<=84){
        return 'C';
    }
    else if (grade>=50&&grade<=69){
        return 'D';
    }
    else if (grade>=0&&grade<=49){
        return 'F';
    }

}
console.log("your score in university is  :" +scoreInUniversty(50))
//function 23 
let count=0;
function counter(){
    count++;
    return count;
}
for (let i=0;i<3;i++){
    console.log(counter());

}
//function 24 
function resetCounter(){
    console.log(count + " and the counter reset now")
    count=0;
    return count;
}
resetCounter()
for (let i=0;i<3;i++){
    console.log(counter());

}


