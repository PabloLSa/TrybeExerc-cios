let numbers=[5,9,3,19,70,8,100,2,35,27];

let resultado =0;
  for(index=0;index<numbers.length;index+=1){
   resultado+=numbers[index]; 
}
resultado=resultado/numbers.length;
console.log("A média é " + resultado)
// Com base no código que acabou de gerar, faça com que, caso o valor final seja mairo que 20 imprima  a mensagem/;
//valor maior que 20. Caso não seja, imprima valor menor ou igual a 20
if(resultado>20){
 console.log("Valor da média é mairo que 20");
} else{
    console.log('VAlor menor ou i=gual a 20h');
}

