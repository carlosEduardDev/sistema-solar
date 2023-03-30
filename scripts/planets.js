export default function initChangePlanetas() {
  const itensMenu = document.querySelectorAll(".menu_item");
  const menu = document.querySelector(".menu");
  const apresentacao = document.querySelector(".apresentacao");
  const autor = document.querySelector(".autor");
  const github = document.querySelector(".github");

  function selectPlanets(e) {
    menu.classList.add("oculto");
    apresentacao.classList.add("ativo");
    autor.classList.add("oculto");
    github.classList.add("oculto");

    function zerar() {
      const solarSystem = document.querySelector(".solar-system");
      solarSystem.classList.add("oculto");
    }
    zerar();

    const planet = e.currentTarget.dataset.planet;
    fecthPlanet(planet);
  }

  async function fecthPlanet(planet) {
    apresentacao.querySelector(".infos").innerHTML = "carregando...";
    apresentacao.querySelector(".description").innerHTML = "carregando...";

    const r = await fetch("./api-planets/planets.json");
    const j = await r.json();

    document.querySelector(".autor span").style.color = `${j[planet].color}`;

    if (planet === "sun") {
      apresentacao.querySelector(".infos").innerHTML = `
    <li><span>Astro</span>:  ${j[planet].name} </li>
    <li><span>Tamanho</span>:  ${j[planet].width} </li>
    <li><span>Velocidade</span>:  ${j[planet].velocity}</li>
    <li><span>Tempo para dar a volta na galaxia</span>:  ${j[planet].delayOfTranslateForGalaxy}</li>
    <li><span>Distancia da terra</span>:  ${j[planet].distanceOfEarth} </li>
    `;

      apresentacao.querySelector(
        ".planet-img"
      ).style.backgroundImage = `url(${j[planet].img})`;

      apresentacao.querySelector(".description").innerHTML =
        j[planet].description;

      apresentacao.querySelectorAll(".infos span").forEach((span) => {
        span.style.color = `${j[planet].color}`;
      });
    } else if (planet === "earth") {
      apresentacao.querySelector(".infos").innerHTML = `
    <li><span>Astro</span>:  ${j[planet].name} </li>
    <li><span>Tamanho</span>:  ${j[planet].width} </li>
    <li><span>Velocidade</span>:  ${j[planet].velocity}</li>
    <li><span>Tempo de rotação</span>:  ${j[planet].delayOfRotate}</li>
    <li><span>Tempo de translação</span>:  ${j[planet].delayOfTranslateForSun}</li>
    `;

      apresentacao.querySelector(".description").innerHTML =
        j[planet].description;

      apresentacao.querySelector(
        ".planet-img"
      ).style.backgroundImage = `url(${j[planet].img})`;

      apresentacao.querySelectorAll(".infos span").forEach((span) => {
        span.style.color = `${j[planet].color}`;
      });
    } else {
      apresentacao.querySelector(".infos").innerHTML = `
    <li><span>Astro</span>:  ${j[planet].name} </li>
    <li><span>Tamanho</span>:  ${j[planet].width} </li>
    <li><span>Velocidade</span>:  ${j[planet].velocity}</li>
    <li><span>Tempo de rotação</span>:  ${j[planet].delayOfRotate}</li>
    <li><span>Tempo de translação</span>:  ${j[planet].delayOfTranslateForSun}</li>
    <li><span>Distancia da terra</span>:  ${j[planet].distanceOfEarth} </li>
    `;

      apresentacao.querySelector(".description").innerHTML =
        j[planet].description;

      apresentacao.querySelector(
        ".planet-img"
      ).style.backgroundImage = `url(${j[planet].img})`;

      apresentacao.querySelectorAll(".infos span").forEach((span) => {
        span.style.color = `${j[planet].color}`;
      });
    }

    if (planet === "saturn") {
      apresentacao.querySelector(".planet-img").style.backgroundImage =
        "url(./images/planets/saturn.png)";

      apresentacao.classList.add("saturn");
    }
  }

  itensMenu.forEach((item) => {
    item.addEventListener("click", selectPlanets);
  });
}
