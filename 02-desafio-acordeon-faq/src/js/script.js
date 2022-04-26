// Pergar todas as lis 
const itensPerguntasERespostas = document.querySelectorAll('.item')

itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function(){
        // Ao clicar para abri fecha o que está aberto
        const itemAtivoAtual = document.querySelector('.ativo')

        if(itemAtivoAtual){
            itemAtivoAtual.classList.toggle("ativo")
        }

        item.classList.toggle('ativo')
    })
})