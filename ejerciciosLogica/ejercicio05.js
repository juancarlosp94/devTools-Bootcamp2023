// Draw and X

// const drawX = (tamano) => {
//     spaces = " *" * tamano;
//     asterisk = "*"
//     for(let i = 0; i <= tamano ; i++){
//     console.log(asterisk = " " + asterisk);
     
//     }
//     console.log(spaces);
// }

// drawX(5)

const drawX = tamano => {
    
    for(let i = 0; i < tamano ; i++){
        let xPattern = ""
        
        for(let j = 0; j < tamano ; j++) {
            
            if(i === j || j === tamano - i - 1 ){
                
                xPattern += "*"
            }else{
                
                xPattern += " "
            }
            
        } 
        console.log(xPattern); 
}

}

drawX(7)