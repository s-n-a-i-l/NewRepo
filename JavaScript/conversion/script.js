// JavaScript source code
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("dec-to-bin-input").addEventListener('input', decToBin);
    document.getElementById("dec-to-hex-input").addEventListener('input', decToHex);
    document.getElementById("bin-to-dec-input").addEventListener('input', binToDec);
    document.getElementById("hex-to-dec-input").addEventListener('input', hexToDec);
    document.getElementById("bin-to-hex-input").addEventListener('input', binToHex);
});

function decToBin() {
    let input = document.getElementById("dec-to-bin-input");
    let result = document.getElementById("dec-to-bin-result");
    let n = parseInt(input.value);
    if (isNaN(n) || n < 0) {
        result.innerHTML = "Invalid input";
        return;
    }
    result.innerHTML = n.toString(2);
}

function decToHex() {
    let input = document.getElementById("dec-to-hex-input");
    let result = document.getElementById("dec-to-hex-result");
    let n = parseInt(input.value);
    if (isNaN(n) || n < 0) {
        result.innerHTML = "Invalid input";
        return;
    }
    result.innerHTML = n.toString(16).toUpperCase();
}

function binToDec() {
    let input = document.getElementById("bin-to-dec-input");
    let result = document.getElementById("bin-to-dec-result");
    let binStr = input.value.trim();
    let n = parseInt(binStr, 2);
    if (isNaN(n)) {
        result.innerHTML = "Invalid binary";
        return;
    }
    result.innerHTML = n;
}

function hexToDec() {
    let input = document.getElementById("hex-to-dec-input");
    let result = document.getElementById("hex-to-dec-result");
    let hexStr = input.value.trim().toLowerCase();
    let n = parseInt(hexStr, 16);
    if (isNaN(n)) {
        result.innerHTML = "Invalid hex";
        return;
    }
    result.innerHTML = n;
}

function binToHex() {
    let input = document.getElementById("bin-to-hex-input");
    let result = document.getElementById("bin-to-hex-result");
    let binStr = input.value.trim();
    let n = parseInt(binStr, 2);
    if (isNaN(n)) {
        result.innerHTML = "Invalid binary";
        return;
    }
    result.innerHTML = n.toString(16).toUpperCase();
}
