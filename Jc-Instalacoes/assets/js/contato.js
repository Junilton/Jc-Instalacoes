document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Exemplo de validação básica
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome && email && mensagem) {
      alert("Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
});
