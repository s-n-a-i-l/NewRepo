// JavaScript source code
function setImage()
{
    let filename = document.getElementById("image-file");
    let reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("photo").src = e.target.result;
    }
    reader.readAsDataURL(filename.files[0]);
}
function setBackground()
{
    let color_tool = document.getElementById('choose-color');
    let color = color_tool.value;
    //document.body.style.backgroundImage = "none";
    //document.body.style.backgroundColor = color;
    document.getElementById('color-sample').style.backgroundColor = inverse_color;
    document.getElementById('color-sample').style.width = "200px";
    document.getElementById('color-sample').style.height = "200px";
}
function switchBackground()
{
    //let target = document.getElementById("switch-background").src;
    //let path = target.split('/');
    //let file = path[path.length - 1];
    ///////////////////////////////////////////////////////////
    //console.log(file);
    //if (file === "moon.png") document.getElementById("switch-background").src = "img/sun.png";
    //else document.getElementById("switch-background").src = "img/moon.png";
    //document.getElementById("switch-background").src = file === "moon.png" ? "img/sun.png" : "img/moon.png";
    //document.body.style.backgroundImage = "none";
    let delay = document.getElementById("delay").value;
    document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
    document.getElementById("switch-background").style.transition = `background-image ${delay}s, filter ${delay}s`;
    document.body.className = document.body.className === "dark" ? "white" : "dark";
    //document.body.className = file === "moon.png" ? "dark" : "white";
    //document.body.style.backgroundColor = file === "moon.png" ? "black" : "white";
    //document.body.style.color = file === "moon.png" ? "white" : "black";
    //document.getElementById("switch-background").src = `img/${file === "moon.png" ? "sun.png" : "moon.png"}`;
    /*
    ---------------------
    5 == "5":true;
    5 === "5":false;
    ---------------------
    */
}
document.addEventListener
    (
        "mousemove",
        function (event)
        {
            let x = event.clientX;
            let y = event.clientY;
            document.getElementById("mouse").innerHTML = `X = ${x}, Y =${y}`;

        }
);

//////////////////////////////////////////////////////////time/////////
//DOM- document object model

function addLeadingZero(number)
{
    return number < 10 ? "0" + number : number;
}
document.body.onload = function tick_timer()
{
    let time = new Date();
    document.getElementById("full-time").innerHTML = time;

    setTimeout(tick_timer, 100);

    document.getElementById("hours").innerHTML = addLeadingZero(time.getHours());
    document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
    document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());

    document.getElementById("year").innerHTML = addLeadingZero(time.getFullYear());
    document.getElementById("month").innerHTML = addLeadingZero(time.getMonth() + 1);
    document.getElementById("day").innerHTML = addLeadingZero(time.getDate());
    document.getElementById("day-of-week").innerHTML = time.toLocaleDateString("ru", { weekday: "long" });

    document.getElementById("current-date").style.visibility = document.getElementById("show-date").checked ? "visible" : "hidden";
    document.getElementById("day-of-week").style.visibility = document.getElementById("show-weekday").checked ? "visible" : "hidden";
}
document.getElementById("btn-start").onclick = function startCountdownTimer()
{
    let targetDate = document.getElementById("target-date");
    let targetTime = document.getElementById("target-time");
    let btnStart = document.getElementById("btn-start");
    if (btnStart.value == "start") {
        btnStart.value = "stop";
        targetDate.disabled = targetTime.disabled = true;
        tickCountdown();
    }
    else
    {
        btnStart.value == "start";
        targetDate.disabled = targetTime.disabled = false;
        
    }
}
function tickCountdown()
{
    let now = new Date();
    let targetDateControl = document.getElementById("target-date");
    let targetTimeControl = document.getElementById("target-time");

    let targetDateValue = targetDateControl.valueAsDate;
    let targetTimeValue = targetTimeControl.valueAsDate;

    //Выравниваем часовой пояс
    targetDateValue.setHours(targetDateValue.getHours() + targetDateValue.getTimezoneOffset() /60);
    targetTimeValue.setHours(targetTimeValue.getHours() + targetTimeValue.getTimezoneOffset() /60);


    document.getElementById("duration").innerHTML = typeof (targetDateValue);
    targetTimeValue.setFullYear(targetDateValue.getFullYear());
    targetTimeValue.setMonth(targetDateValue.getMonth());
    targetTimeValue.setDate(targetDateValue.getDate());

    document.getElementById("target-date-value").innerHTML = targetDateValue;
    document.getElementById("target-time-value").innerHTML = targetTimeValue;
    document.getElementById("current-time-value").innerHTML = now;

    let duration = targetTimeValue - now;
    document.getElementById("duration").innerHTML = duration;

    let timestamp = Math.trunc( duration / 1000);

    document.getElementById("timestamp").innerHTML = timestamp;

    setTimeout(tickCountdown, 100);
}