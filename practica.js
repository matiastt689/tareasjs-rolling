const numeros=[100,20,40,50,55,44,1023]

numeros.sort()

let numeros2 = numeros.sort((a,b)=>a - b)

let pares= numeros.filter((numero)=>{

return numero % 2 == 0;
})

let mayorCincuenta= numeros.filter((numero) => numero>50);

alumnos=['Matias','Tomas','Martin','Jimena','Gonzalo','Alfredo','Matias',"Martin"]

let resultadoBusqueda= alumnos.find((alumno)=>{
return alumno=='Alfredo';
})

let resultadoFilter= alumnos.filter((alumno)=>{
return alumno == "Martin";
});

alumnos.forEach ((alumno) => {
  console.log(`Hola soy ${alumno.toUpperCase()}`); 
 });