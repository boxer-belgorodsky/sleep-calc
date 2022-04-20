let sleepResult = document.getElementById("sleep-result");

function sleepNow() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // 5 cycles
    date.setMinutes(minutes + 450)
    let idealHours = 0;
    let idealMinutes = 0;
    sleepResult.innerHTML = 
        " Вам нужно <div class=\"time-result\">поставить будильник на " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + "</div>" +
        "чтобы завершить пять полуторачасовых циклов сна";
}