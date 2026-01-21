const clock = document.getElementById('clock');

let audioCtx = null;
let audioStarted = false;

function initAudio()
{
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    audioStarted = true;
}

function playTick()
{
    if (!audioStarted) return;

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.frequency.value = 200;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.03);

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.03);
}


clock.addEventListener('click', function ()
{
    initAudio();
    clock.style.cursor = 'default';
});


for (let i = 0; i < 12; i++)
{
    const angle = i * 30;
    const rad = angle * Math.PI / 180;
    const r = 260;
    const x = 300 + Math.sin(rad) * r;
    const y = 300 - Math.cos(rad) * r;

    const num = document.createElement('span');
    num.className = 'number';
    num.textContent = i || 12;
    num.style.left = (x - 12) + 'px';
    num.style.top = (y - 12) + 'px';
    clock.appendChild(num);
}

let lastSecond = -1;
function tick() {
    const now = new Date();
    const s = now.getSeconds();

    if (s !== lastSecond) {
        playTick();
        lastSecond = s;
    }

    const secDeg = s * 6;
    const minDeg = now.getMinutes() * 6 + s / 10;
    const hrDeg = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;

    document.getElementById('secondHand').style.transform = `rotate(${secDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minDeg}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hrDeg}deg)`;
}

tick();
setInterval(tick, 1000);
