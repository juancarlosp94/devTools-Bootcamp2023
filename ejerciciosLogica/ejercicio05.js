const drawX = tamano => {

    let result = '';
    
    for(let i = 0; i < tamano ; i++){
        let xPattern = "";

        for(let j = 0; j < tamano ; j++) {

            if(i === j || j === tamano - i - 1 ){
                xPattern += "*";
            }else{   
                xPattern += " ";
            }
        } 
        result += xPattern + '\n';
    }
    return result;
}

console.log(drawX(7));