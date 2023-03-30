export default function initMenu() {
  const menu = document.querySelector(".menu");
  const btn = document.querySelector(".btn-menu");
  const solarSystem = document.querySelector(".solar-system");
  const apresentacao = document.querySelector(".apresentacao");
  const autor = document.querySelector(".autor");
  const github = document.querySelector(".github");

  function changeMenu() {
    menu.classList.remove("oculto");
    apresentacao.classList.remove("saturn");
    apresentacao.classList.remove("ativo");
    apresentacao.querySelector(".planet-img").style.backgroundImage = "";
    menu.classList.toggle("open");
    btn.classList.toggle("open");
    solarSystem.classList.remove("oculto");
    autor.classList.remove("oculto");
    github.classList.remove("oculto");
  }

  btn.addEventListener("click", changeMenu);
}
