const prompt=require("prompt-sync")({sigint:true});
// var num = prompt("Di un numero del 1 al 3: ");

// if (num != "1" ,"2" , "3"){
//     console.log("Es diferente");
// }


prueba = () => {
    
    var hola = prompt("Escribe hola: ")
    while (hola != "hola") {
        prueba()
    }
}

prueba()