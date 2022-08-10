const clockTitle = document.querySelector(".js-clock");
const clock = document.querySelector("h2");

const xMas = new Date("2022-12-25 00:00:00");

function setClock() {
  const date = new Date();

  const theTime = xMas - date;

  const days = Math.floor(theTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((theTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((theTime / (1000 * 60)) % 60);
  const seconds = Math.floor((theTime / 1000) % 60);

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setClock();
setInterval(setClock, 1000);
