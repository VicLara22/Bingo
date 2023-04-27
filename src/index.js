var array = _.range(1, 99); // generar un array de 1 -99
aleatorio = _.shuffle(array); // barabajea el array
const player = aleatorio.slice(0, 15); // del array barabajeado le da al jugador de 0 a 15 numeros
aleatorio = _.shuffle(array);
const cpu = aleatorio.slice(0, 15);

const crearCard = (selector, array) => {
    let parent = document.querySelector(`.${selector}`)
    for (e of array) {
        let divcarton = document.createElement('div');
        divcarton.className = 'num n' + e;
        divcarton.textContent = e;
        parent.appendChild(divcarton);
    }

}
crearCartonHTML('cartonPlayer', cartonPlayer);
crearCartonHTML('cartonCPU', cartonCPU);

const contarTachado = () => {
    let totalPlayer = document.querySelector('.cartonPlayer.tachado').length;
    let totalCPU = document.querySelector('.cartonCPU.tachado').length;
    if (totalPlayer === 15) alert('Felicidades');
    if (totalCPU === 15) alert('Felicidades');
}

const sacarBola = () => {
    let bola = Math.floor(Math.random() * rango.length);
    bola = rango[bola]
    _.pull(rango, bola);

    let divbola = document.querySelector('#bola');
    divbola.textContent = bola;
    let num = document.querySelector(`.n${bola}`);
    for (let i = 0; i < num.length; i++) {
        num[i].classList.add('tachado');

    }
}