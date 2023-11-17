let ampm = document.getElementById('ampm');

function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    document.getElementById('hours').textContent = addZero(hr);
    document.getElementById('mins').textContent = addZero(min);
    document.getElementById('seconds').textContent = addZero(sec);

    if (hr >= 12) {
        ampm.textContent = "PM"
    }
    else {
        ampm.textContent = "AM"
    }
}

setInterval(displayTime, 1000);

function addZero(params) {
    return params < 10 ? "0" + params : params;
}


