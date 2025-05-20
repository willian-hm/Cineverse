function fazerLogin() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (nome === "Willian" && senha === "1234") {
    mensagem.style.color = "green";
    mensagem.textContent = "Login realizado com sucesso!";
  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "Nome ou senha incorretos.";
  }
}
