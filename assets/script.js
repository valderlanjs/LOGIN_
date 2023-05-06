//SELECIONA O CAMPO DE SENHA E O BOTÃO DE MOSTRAR
const passwordField = document.querySelector(".password-field");
const showButton = document.querySelector(".show");

//Verifiva se os elementos foram encontrados na página
if (!passwordField || !showButton) {
  console.error("Não foi possivel encontrar os elementos na página.");
}

//Constantes  para as cores do botão
const colorBlue = "#000080";
const colorGray = "#222";

//função para alterar a exibição da senha
function togglePasswordVisibility() {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    showButton.textContent = "Hide";
    showButton.style.color = colorBlue;
  } else {
    passwordField.type = "password";
    showButton.textContent = "Show";
    showButton.style.color = colorGray;
  }
}

//Adiciona um listener de evento para o botão de mostrar
showButton.addEventListener("click", togglePasswordVisibility);
