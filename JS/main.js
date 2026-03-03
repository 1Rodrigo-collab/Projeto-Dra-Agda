const form = document.querySelector(".agendamento form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Agendamento enviado com sucesso! 💖");

  form.reset();
});