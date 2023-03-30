export default function initPreload() {
  const preload = document.querySelector(".preload");
  window.onload = setTimeout(() => {
    preload.style.display = "none";
    document.querySelector(".solar-system").classList.add("anima");
  }, 2000);
}
