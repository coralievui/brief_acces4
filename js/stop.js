let waves = document.getElementById("waves");
let stopButton = document.getElementById("btn_stp");

stopButton.addEventListener('click', (event) => {
    event.preventDefault();
    waves.classList.remove('parallax')
  });