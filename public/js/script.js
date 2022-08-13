//O QUERYSELECTORALL vai transformar a variável em um arrey, mas só em CLASS
const imagem1 = document.getElementById('#click1');//imagem 1// captura o botão pelo ID
const imagem2 = document.qgetElementById('#click2');//imagem


const imagem3 = document.qgetElementById('.black');//imagem



  //essa funçao que pega os click do 3 pontinhos
  const viewPoint = () => { // função do ViewDropDOWN
    const buttons = document.querySelectorAll(".container");// pegando o button 
  // ele virou um arrey porque vai verificar todos os botões 
    buttons.forEach((btn) => {// busca entre tudos os btn
      btn.addEventListener("click", (event) => {// identifica qual botão está clicando e aplica um evento
        const content = event.path[2].children[1];// o path é onde ele tá e o childrn é a posição dele em relação ao 



         //o path é onde está o click pego no console path na pisição 2 e children na posição 1
         content.classList.toggle("active")//add active class e tira quando clicar e acontecer alguma coisa acontece o active
  
         if (content.classList.contains("active")){// verifica se o ACTIVE ativado pelo toggle se for true ele faz o código de baixo
           content.style.display = "none";// troca do evento 
         } else {
           content.style.display = "none";
         }
  //desatva o active e o diplay fica none
  content.addEventListener("mouseleave", () => {// quando mouse sair o content fecha
    content.classList.remove("active");// remover ective 
    if (!content.classList.contains("active")){
      content.style.display = "none";
    }
  })
  
})
})
};
// FUncções sendo executdas forever 
viewPoint();
 