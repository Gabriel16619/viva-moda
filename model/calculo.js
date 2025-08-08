/****************************************************************
 *Objetivo: Desafiar e nos colocar em pratica o que aprendemos nas aulas
 *Autor:Gabriel
 *Data: 06/08/2025
 *Versão:1.0 
 *****************************************************************/

 function calcularJuros(valorP, valorR, valorN, valorT ){
    let calculo = calcularJuros
    let juros = Number(valorR)
    let valorCapital = Number(valorP)
    let vezesJuros = Number(valorN)
    let tempo = Number(valorT)

    const montante = valorP * Math.pow(1 + (valorR / valorN), valorN * valorT )

    
   
    const resultado = calcularJuros(valorN, valorP, valorR, valorT)
    console.log(resultado.toFixed(2))
    
 }
 module.exports = {
    calcularJuros
 }