const createPhoneNumber = array => {

    if (array.length !== 10){
        return "You must include 10 numbers in the array"
    }

    for(let i = 0; i < array.length  ; i++){
        if(isNaN(array[i]) || typeof array[i] !== 'number' || array[i] < 0 || array[i] > 9){
            return "Invalid input, you must create an array of numbers within the range of 0 and 9"
        }
    }

    let phoneNumber = []
    phoneNumber += `(${array[0]}${array[1]}${array[2]}) ${array[3]}${array[4]}${array[5]}-${array[6]}${array[7]}${array[8]}${array[9]}`
    

    return phoneNumber;
}
console.log(createPhoneNumber([2, 5, 5, 1, 3, 4, 7, 8, 9, 0 ]));
console.log(createPhoneNumber([3, 0, '5', 1, 2, 7, 7, 2, 4, 9]));
console.log(createPhoneNumber([3, 0, 5, 1, true, 7, 7, 2, 4, 2]));
