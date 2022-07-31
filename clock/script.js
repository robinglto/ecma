const Time = () => {
    const contenido = document.querySelector("h1");

    let info = new Date();

    let hours = info.getHours();
    let minutes = info.getMinutes();
    let seconds = info.getSeconds();

    hours = hours < 10 ? `0${hours}`: hours;
    minutes = minutes < 10 ? `0${minutes}`: minutes;
    seconds = seconds < 10 ? `0${seconds}`: seconds;

    let display = `${hours}: ${minutes}: ${seconds}`;
    contenido.innerHTML = display;
}

Time();
setInterval(Time, 1000)