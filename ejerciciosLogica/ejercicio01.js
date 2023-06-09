//Solution

const reverseNumber = num => parseInt(num.toString().split("").reverse().join(""))

function next_pal(num) {
    let my_number = num
    let nextNum = num + 1
    let numberReversed = reverseNumber(num)
    while(true){
        if(nextNum != numberReversed){
            nextNum += 1
            numberReversed = reverseNumber(nextNum) 
        } else {
            break
        }
        
    }
    console.log(`The closest palindrome number to ${my_number} is ${nextNum}`);
}

next_pal(11)
next_pal(188)
next_pal(191)
next_pal(2541)


// -------- Solution with validation -------------

// const prompt=require("prompt-sync")({sigint:true});


// //fuction to reverse strings
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// //function next_pal(num) 
// function next_pal() {

//     var num = prompt("Type any number bigger than 0: ").trim();
//     var intNum = parseInt(num);
//     var numReverse = parseInt(reverseString(num));

//     console.log(num,intNum,numReverse);
    
//     while (intNum < 0) {
//         num = prompt("Remember to type a number higher than 0: ");
//         intNum = parseInt(num) 
//         numReverse = parseInt(reverseString(num)); 
//     }

//    while(true){
//     if(intNum !== numReverse){
//         intNum = intNum + 1;
//         numReverse = parseInt(reverseString(intNum.toString()));
//     } else {
//         console.log(`The closest plaindrom to ${num} is ${intNum}`);
//         break
//     }
//    }
// }

// next_pal()