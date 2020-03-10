const clockText = document.querySelector('.clock');

function getTime() {
    const currentDate = Date();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const seconds = currentDate.getSeconds();

    clockText.innerText = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();