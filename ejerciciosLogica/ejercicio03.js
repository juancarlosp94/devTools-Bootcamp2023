const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
const nombres2 = [12, 'María', 'Pedro', 'Juan', 'María', 'María'];

const count = {};

function countNameRepetitions(names) {

    for(let i = 0; i < names.length; i++){
        if(typeof names[i] !== 'string'){
            return 'All array values should be strings!!!'
        }
    }
    names.forEach(e => {
        // count[e] will define the key side of the empty object count previously defined. On the value side we evaluate with a boolean
        // if count[e] object exist, if not, then it will set a default "" empty string and add an asterisk. If it exists then it will
        // add an additional asterisk. ("count[e]":"count[e] exists? if yes add an asterisk (+ "*"): if not then set "" and add *)
        count[e] = (count[e] || "") + "*"
    });   
    
    return count
}

const resultado = console.log(countNameRepetitions(nombres));
const resultado2 = console.log(countNameRepetitions(nombres2));



