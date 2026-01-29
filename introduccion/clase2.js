//_________________________CONDICIONALES_________________________
/*
//if --> uso cuando tengo un solo camino, o cuando tengo mas de 2
//ternario --> uso cuando tengo 2 caminos
//switch --> uso cuando tengo mas de 2 caminos y cada camino es muy diferente a los demas
let edadUsuario = Number(prompt("Por favor, ingresa tu edad:"));
console.log(edadUsuario >= 18 ? "si, podes pasar" : "no, no podes pasar");
/*

//contorlar el accesp a un recital de musica
//si es mayor lo dejo pasar
//si es menor pero viene con un adulto lo dejo pasar, le mostramos que si puede pasar con el adulto
//si es menor y no viene con un adulto no lo dejo pasar

/*
let edadPersona = 12;
let vieneAcompaniado = true;

if (edadPersona >= 18) {
    console.log("Podes pasar al recital, sos mayor de edad");
} else if(edadPersona < 18 && vieneAcompaniado) {
    console.log("Podes pasar al recital, pero solo porque venis acompañado");
    } else {
        console.log("No podes pasar al recital, sos menor de edad y no venis acompañado");
    }
*/
//_________________________CICLOS_________________________
//while --> uso cuando no se conoci de antemano la cantidad de iteraciones

//for --> uso cuando conozco de antemano la cantidad de iteraciones
//inicializacion; condicion; modificador
/*
let num = 15;
num ++; = 16
num--;  = 14
*/

//un sistema  q determine si pueden pasar o no
//necisito pregunntar a cada persona su edad
//son 30 personas en total
/*
for (let i = 1; i <= 30; i++) {
    let edadPersona = Number(prompt("Por favor, ingresa tu edad:"));
    if (edadPersona >= 18) {
        console.log("Podes pasar al recital, sos mayor de edad");
    } else {
        console.log("No podes pasar al recital, sos menor de edad");
    }  
}
*/
