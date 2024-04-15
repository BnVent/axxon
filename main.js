// Formatear e imprimir fecha en etiqueta #current-date
(() => {
  const dateTag = document.getElementById("current-date");
  const dateToday = new Date();

  const currentDate = dateToday.getDate();
  const currentMonth = dateToday.getMonth();
  const currentYear = dateToday.getFullYear();

  const monthsName = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  dateTag.innerText = `${currentDate > 9 ? currentDate : "0" + currentDate} de ${monthsName[currentMonth]} de ${currentYear}`;
})();

const TOTAL_REVISTAS = 300;
let revistasCargadasArray = [];

// Renderizado inicial de las 8 primeras revistas
(() => {
  for (let i = TOTAL_REVISTAS; i > TOTAL_REVISTAS - 8; i--) revistasCargadasArray.push(i);
  renderizarRevistas();
})();

function cargarMasRevistas() {
  if (revistasCargadasArray.length == TOTAL_REVISTAS + 1) return; // Todas las revistas han sido cargadas.
  let loopCondition = TOTAL_REVISTAS - (revistasCargadasArray.length + 8);
  for (let i = TOTAL_REVISTAS - revistasCargadasArray.length; i > loopCondition; i--) revistasCargadasArray.push(i);
  renderizarRevistas();
}

function cargarTodasLasRevistas() {
  if (revistasCargadasArray.length == TOTAL_REVISTAS + 1) return; // Todas las revistas han sido cargadas.
  for (let i = TOTAL_REVISTAS - revistasCargadasArray.length; i >= 0; i--) revistasCargadasArray.push(i);
  disableLoadButtons();
  renderizarRevistas();
}

function renderizarRevistas(numeroRevista) {
  const revistasDOMContainer = document.getElementById("revistas");

  if(numeroRevista){
    revistasDOMContainer.innerHTML = `<a href="./lector.html?revista=${numeroRevista}"><img src="./revistas/axxon${numeroRevista}/c-${numeroRevista}tapach.jpg" onerror="this.src = './revistas/axxon${numeroRevista}/c-${numeroRevista}tapach.png'"></a>`
    return;
  }

  revistasDOMContainer.innerHTML = revistasCargadasArray
    .map(
      (index) =>
        `<a href="./lector.html?revista=${index}"><img src="./revistas/axxon${index}/c-${index}tapach.jpg" onerror="this.src = './revistas/axxon${index}/c-${index}tapach.png'"></a>`
    )
    .join("");
}

function disableLoadButtons(){
  document.getElementById("revistas-footer").children[0].style.opacity = 0.25;
  document.getElementById("revistas-footer").children[1].style.opacity = 0.25;
}


const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")

function buscarRevista(){
  const inputValue = searchInput.value

  if(inputValue >= 0 && inputValue <= TOTAL_REVISTAS) renderizarRevistas(inputValue)
  else renderizarRevistas()
}