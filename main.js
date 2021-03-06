// variaveis ? "respostas"
// dados de entradas? "Perguntas"
// dados de saida? "resposta"

const elementAnswer = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")

    const answers = [
        "Certeza!",
        "Não tenho tanta certeza.",
        "É decididamente assim.",
        "Não conte com isso.",
        "Sem dúvidas!",
        "Pergunte novamente mais tarde.",
        "Sim, definitivamente!",
        "Minha resposta é não.",
        "Você pode contar com isso.",
        "Melhor não te dizer agora.",
        "A meu ver, sim.",
        "Minhas fontes dizem não.",
        "Provavelmente.",
        "Não é possível prever agora.",
        "Perspectiva boa.",
        "As perspectivas não são tão boas.",
        "Sim.",
        "Concentre-se e pergunte novamente.",
        "Sinais apontam que sim.",
      ]

// clicar em fazer pergunta

function doTheQuestion() {

        if(inputQuestion.value == "") {
            alert("Escreva sua pergunta!!!")
            return
        }
        buttonDoQuestion.setAttribute("disabled", true)
        
        const answer = "<div>" + inputQuestion.value + "</div>"

      //Gerar um numero aleatorio
      const totalAnswers = answers.length
      const randomNumber = Math.floor(Math.random() * totalAnswers)

      elementAnswer.innerHTML = answer + answers[randomNumber]
        
      elementAnswer.style.opacity = 1;
      //sumir a resposta depois de um tempo

      setTimeout(function() {
          elementAnswer.style.opacity = 0; 
          buttonDoQuestion.removeAttribute('disabled')
      }, 3000)
      
} 