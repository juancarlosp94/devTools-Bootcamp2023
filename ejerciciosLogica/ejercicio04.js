/*Si el número es divisible por 3, debes imprimir "Fizz".
Si el número es divisible por 5, debes imprimir "Buzz".
Si el número es divisible tanto por 3 como por 5, debes imprimir "FizzBuzz".
Si el número no es divisible ni por 3 ni por 5, debes imprimir el número tal cual.*/

const fizzBuzz = n => {
    for(let i = 1; i <= n; i++) {
        
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if(i % 3 == 0) {
            console.log('Fizz');
        } else if(i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }

}

fizzBuzz(15)