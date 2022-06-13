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
];

function askQuestion() {
  //check if question is valid
  const questionInput = document.querySelector("#question");
  if (questionInput.value == "") {
    alert("Digite sua pergunta!");
    return;
  }

  const askButton = document.querySelector("#ask");
  askButton.setAttribute("disabled", true);

  //creates an html div to insert on the answer's element
  const questionElement = "<div>" + questionInput.value + "</div>";

  //generates random answer and adds to answer's element
  const randomPosix = Math.floor(Math.random() * answers.length);
  const answerElement = document.querySelector("#answer");
  answerElement.innerHTML = questionElement + answers[randomPosix];
  answerElement.style.opacity = 1;

  //hide answer after 3 seconds
  setTimeout(function () {
    //answerElement.innerHTML = "";
    answerElement.style.opacity = 0;
    askButton.removeAttribute("disabled");
  }, 3000);
}
