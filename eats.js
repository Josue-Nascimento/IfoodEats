let almocopreco;
let almoco1;
let sobremesapreco;
let sobremesa1;
let bebidapreco;
let bebida1;

function selecionar(almoco){
const almocoSelecionado = document.querySelector('.verde')

if(almocoSelecionado !== null){
   const check = document.querySelector('.rolamento .verde')
   almocoSelecionado.classList.remove('verde')
}
const selecionado = document.querySelector(almoco);

selecionado.classList.add('verde');
almoco1 = document.querySelector(almoco)
console.log(almoco1)
 almocopreco = Number(document.querySelector('.rolamento .verde .preco').innerHTML)
 console.log(almocopreco)


 btFinalizar();
}

function selecionarbebida(bebida){
   const bebidaSelecionada = document.querySelector('.rolamento1 .verde')
   console.log(bebidaSelecionada)


   if (bebidaSelecionada !== null){

      const check2 = document.querySelector('.verde')
      bebidaSelecionada.classList.remove('verde')
   }
   const selecionado1 = document.querySelector(bebida);
   console.log(selecionado1)
   selecionado1.classList.add('verde')
   bebida1 = document.querySelector(bebida)
   console.log(bebida1)
   bebidapreco = Number(document.querySelector('.rolamento1 .verde .preco').innerHTML)
   console.log(bebidapreco)

   btFinalizar();
}


function selecionarSobrebemesa(sobremesa){
   const sobremesaSelecionada = document.querySelector ('.rolamento2 .verde')
   console.log(sobremesaSelecionada)
   if(sobremesaSelecionada !== null){
      const check = document.querySelector('.verde')
      sobremesaSelecionada.classList.remove('verde')
   }
   const selecionado2 = document.querySelector (sobremesa)
   console.log(selecionado2)
   selecionado2.classList.add('verde')
   sobremesa1 = document.querySelector(sobremesa)
   console.log(sobremesa1)

   sobremesapreco = Number(document.querySelector('.rolamento2 .verde .preco').innerHTML)
   console.log(sobremesapreco) 

   btFinalizar();
}

function btFinalizar(){
   console.log(almoco1, bebida1, sobremesa1)
   if(almoco1 !== undefined && bebida1 !== undefined && sobremesa1 !== undefined){
      const bt = document.querySelector('.finalizar')
      bt.innerHTML = 'Finalizar pedido'
      bt.classList.add('fundo-verde')
   }
}

function IrParaWhatsapp(){
   if(almoco1 !== undefined && bebida1 !== undefined && sobremesa1 !== undefined){
      console.log(almocopreco, bebidapreco, sobremesapreco)

      let soma = almocopreco + bebidapreco + sobremesapreco

      let nomeAlmoco = almoco1.querySelector('h3').innerHTML
      let nomeBebida = bebida1.querySelector('h3').innerHTML
      let nomeSobremesa = sobremesa1.querySelector('h3').innerHTML
      console.log(nomeAlmoco, nomeBebida, nomeSobremesa)

      let mensagem = `Olá, gostaria de fazer o pedido:
      - Prato: ${nomeAlmoco}
      - Bebida: ${nomeBebida}
      - Sobremesa: ${nomeSobremesa}
      Total: R$ ${soma.toFixed(2)}`
      
      let uri = encodeURIComponent(mensagem)
      window.open( 'https://wa.me/5512992189430?text='+uri)
   }
}

   
   