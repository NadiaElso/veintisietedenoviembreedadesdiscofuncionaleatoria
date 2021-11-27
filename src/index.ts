//Para tener control de la gente que hay en una disco el gerente quiere saber cuantas personas de diferentes edades han entrado. 
//No se han permitido la entrada a menores de 18 ni mayores de 40. Para la carga de los datos se usa la función aleatorio  (use la función aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
//Se sabe que la cantidad total de personas dentro del local es de 270
//Se quiere saber: 	
//Cuántas personas son menores de 21 años
//Cuántas personas mayores o igual a 21 años
//Cuántas personas en total


function disco(minimo:number,mayor:number) {
  let edades:number[]=new Array(270);
  let menores21:number[]=new Array();
  let mayores21:number[]=new Array();

for (let index = 0; index < edades.length; index++) {
  edades[index]=Math.floor(Math.random() * (mayor - minimo)) + minimo;
  
  console.log("las edades ingresadas son:"+ edades);
if (edades[index]<21) {
menores21[index]=edades[index]
console.log("las edades menores en total son:" + menores21);
console.log("La cantidad de menores de 21 es:" + menores21.length)

}else if(edades[index]>21||edades[index]===21)
mayores21[index]=edades[index]
console.log("las edades mayores en total son:" + mayores21);
console.log("la cantidad de mayores de 21 son:" + mayores21.length)


}
return disco
}

disco(19,40)