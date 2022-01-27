/*const nombre = "Ines Trinidad"
let edad =19;

let condicion = edad >= 18;
let condicion = nombre === "Ines Trinidad";

console.log("condicion =>", condicion);
console.log("condicion2 =>", condicion2);

if (condicion){
    console.log(`Entra a la primera condicion `);
} else if (condicion2) {
    console.log (`Entra a la segunda condicion `);
}else {
    console.log ("Ninguna de las condiciones es verdadera");
}
*/


/*let variable = false;
variable= true;
const number=20;
console*/

/*let edad = 20;
edad >18 ? console.log ("Es mayor de dad"): console.log("es menor de edad");*/

/*for (let indice = 0; indice <10; indice++){
console.log(`El valor de índice es = ${indice}`);
}
console.log("se terminó el for")*/

/*const arreglo = ["Justin","Harry","Matty","Kevin","Chris","Ed" ];

console.log("arreglo =>", arreglo); */

/*for (let indice = 0; indice <arreglo.length; indice++){
    console.log(`El nombre de la persona es ${arreglo[indice]}`);
}

 arreglo.forEach((nombre)=> console.log(`El nombre de la persona es ${nombre}`)); */
    /*
    if (indice === 2){
    console.log("2");
    break;
    }
    console.log("Otro código")
}
console.log ("Se terminó el for");*/

/*
let contador = true;

while console: Console {
    console.log(contador);

    contador = contador + 1;    */

   /* const nombre= 'Ines Trinidad'
const texto = `Mi nombre es  ${nombre}` ;

console.log(texto); */

/*console.log ("hola mundo") todo se ejecuta*/

/*function Saludar (nombre,apellido){
console.log(`Hola $(nombre), ¿ómo estás?`);
}*/

/*Saludar ("Jesus","Garcia");
Saludar ("Inés","Trinidad");*/

const persona1 = {
    nombre: "Ines",
    apellido: "Trinidad",
    edad: 24,
};

const persona2 = {
    nombre: 'Jesus',
    apellido: 'García',
    edad: 20,
};
 const arregloPersonas = [persona1,persona2];
const admitirPaso = (persona) =>{
    if(persona.edad >= 18){
        console.log(`Puede pasar  ${persona.nombre} ${persona.apellido}`);
    }else {
        console.log(`No puedo pasar ${persona.nombre} ${persona.apellido}`);
    }

};
arregloPersonas.forEach((persona) => {
    admitirPaso(persona);
});

function alerta () {
    alert("Bienvemido a la pagina");
}

const esMayor = (edad) => {
    if (edad >=18){
        return true
    }else {
        return false;
    }
};
const variable = esMayor(80);
console.log(variable);




