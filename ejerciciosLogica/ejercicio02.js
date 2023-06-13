const createPhoneNumber = array => {
    let phoneNumber = `(${array[0]}${array[1]}${array[2]})`
    phoneNumber += ` ${array[3]}${array[4]}${array[5]}`
    phoneNumber += `-${array[6]}${array[7]}${array[8]}${array[9]}`

    return phoneNumber;
}

console.log(createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]));
console.log(createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]));