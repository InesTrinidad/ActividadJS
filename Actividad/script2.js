const Ejercicio1 = [3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 24, 6, 10, 54, 82, 71, 67, 77, 17, 29, 19, 88,
456, 13, 23, 24,
];

console.log("Ejercicio 1 ")
console.log ("Los numeros primos son: ")

function numeroPrimo(num){
    for (let i=2; i<=num; i++){
        if (num%i==0){
            break;
        } else{
            console.log(`${num}  `)}
        }
    }
    Ejercicio1.forEach((num) =>{
        numeroPrimo(num);

    });

    /*Ejercicio 2*/

    console.log ("-------------------------")
    console.log("Ejercicio 2")

    const Ejercicio2 = [
        {
          nombre: "Gabriel",
          edad: 22,
          esFamiliar: false,
        },
        {
          nombre: "Jaime",
          edad: 15,
          esFamiliar: true,
        },
        {
          nombre: "María",
          edad: 18,
          esFamiliar: true,
        },
        {
          nombre: "Angel",
          edad: 19,
          esFamiliar: true,
        },
        {
          nombre: "Fer",
          edad: 18,
          esFamiliar: true,
        },
        {
          nombre: "Rachel",
          edad: 30,
          esFamiliar: true,
        },
      ];

      function admitidos(persona){
              if (persona.edad >= 18 && persona.esFamiliar == true){
                  console.log(`${persona.nombre}  invitada/o`);
                  
              }
        }
        Ejercicio2.forEach((persona) => {
            admitidos(persona);
        });

      /*Ejercicio 3*/
      console.log("-----------------------------")
      console.log("Ejercicio 3")
      function fibonacci(){
          let n=0;
          let m=1;
          console.log(`${0},`)
          for (let i=0; i<=49; i++){
          f=n+m;
          n=m;
          m=f;
          console.log(`${f}, `)}
      }
      fibonacci();
      function alerta () {
        alerta(`Ejercicio1:  ${num} ; Ejercicio2: ${persona.nombre}  invitada/o  ;   Ejercicio 3: ${f},`);
    }


    
