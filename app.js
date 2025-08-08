/********************************************************************
 *Objetivo: Desafiar e nos colocar em pratica o que aprendemos nas aulas
 *Autor:Gabriel
 *Data: 06/08/2025
 *Versão:1.0
 ********************************************************************/ 
 const MENSAGE_ERROR_NAN = 'DIGITE APENAS NÚMEROS';
 const calcularJuros = require('./modulo/calculo.js')

 // Biblioteca readline
 const readline = require('readline');
 
 // Criando interface
 const entradaDeDados = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
 
 // Início do codigo
 entradaDeDados.question('Digite o nome do cliente: ', function(nome) {
   let nomeCliente = String(nome).toUpperCase();
 
   entradaDeDados.question('Digite o nome do Produto: ', function(produto) {
     let nomeProduto = String(produto).toUpperCase();
 
     entradaDeDados.question('Digite o valor capital do produto: ', function(valorP) {
       let valorCapital = Number(valorP);
        //bloqueio de letras
       if (isNaN(valorCapital)) {
         console.log(MENSAGE_ERROR_NAN);
         entradaDeDados.close();
         return;
       }
 
       entradaDeDados.question('Insira a taxa de juros anual: ', function(valorR) {
         let juros = Number(valorR);
        //bloqueio de letras
         if (isNaN(juros)) {
           console.log(MENSAGE_ERROR_NAN);
           entradaDeDados.close();
           return;
         }
 
         entradaDeDados.question('Digite o número de vezes que os juros são compostos por ano: ', function(valorN) {
           let vezesJuros = Number(valorN);

           entradaDeDados.question('Digite o tempo em anos:', function(valorT){
            let tempo = Number(valorT)

            if (isNaN(juros)) {
                console.log(MENSAGE_ERROR_NAN);
                entradaDeDados.close();
                return;
                }
           })
           {}
            //bloqueio de letras
           if (isNaN(vezesJuros)) {
             console.log(MENSAGE_ERROR_NAN);
            
           } else {

            let calculo = calculoDeParcelamento.calcularJuros (valorN, valorP, valorR, valorT)
            let statusCalculo = calculoDeParcelamento.validarStatusJuros(calculo)

            if (statusCalculo){

                console.log('\n--- Viva Moda ---');//pula de linha
                //dados cliente
                console.log(`Muito obrigado por realizar a sua compra conosco Sr(a): ${nomeCliente}.`);
                console.log(`A compra do Produto: ${nomeProduto} tem um valor de R$: ${valorCapital.toFixed(2)}.`);
                console.log(`Taxa de Juros Anual ${juros}%.`);
                console.log(`a sua compra será parcelada em ${vezesJuros}X e o Sr(a) pagará R$: `);
              }
               
            }

           entradaDeDados.close();
         });
       });
     });
   });
 });
