document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

const dataDoEvento = new Date("Jun 5, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000*60*60*24;
    const horaEmMs = 1000*60*60;
    const minEmMs = 1000*60;

    const diasAteEvento = Math.floor(distanciaAteEvento/diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs)/horaEmMs);
    const minAteEvento = Math.floor((distanciaAteEvento % horaEmMs)/minEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento%minEmMs)/1000);
    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minAteEvento);
    console.log(segundosAteEvento);
    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minAteEvento}m ${segundosAteEvento}s`
    
}, 1000);