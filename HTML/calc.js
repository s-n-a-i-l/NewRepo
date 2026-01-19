// JavaScript source code
// Получаем элементы
const display = document.querySelector('.display input');
const digitalButtons = document.querySelector('.digital-buttons');
const controlButtons = document.querySelector('.control-buttons');
const memoryButtons = document.querySelector('.memory-buttons');

// Состояние калькулятора
let currentValue = '0';
let previousValue = null;
let operator = null;
let waitingForSecondOperand = false;
let memory = 0;

// Обновление дисплея
function updateDisplay() {
    display.value = currentValue + (currentValue.includes('.') ? '' : '.');
}

// Ввод цифры
function inputDigit(digit) {
    if (waitingForSecondOperand) {
        currentValue = digit;
        waitingForSecondOperand = false;
    } else {
        currentValue = currentValue === '0' ? digit : currentValue + digit;
    }
    updateDisplay();
}

// Ввод точки
function inputDecimal() {
    if (waitingForSecondOperand) {
        currentValue = '0.';
        waitingForSecondOperand = false;
        updateDisplay();
        return;
    }
    if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay();
    }
}

// Обработка операций
function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentValue);

    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (previousValue === null) {
        previousValue = inputValue;
    } else if (operator) {
        const result = calculate(previousValue, inputValue, operator);
        currentValue = String(result);
        previousValue = result;
        updateDisplay();
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
}

// Вычисления
function calculate(first, second, op) {
    switch (op) {
        case '+': return first + second;
        case '-': return first - second;
        case '*': return first * second;
        case '/': return second !== 0 ? first / second : 'Error';
        default: return second;
    }
}

// Специальные функции
function handleSpecial(action) {
    const value = parseFloat(currentValue);
    switch (action) {
        case 'sqrt':
            currentValue = value >= 0 ? String(Math.sqrt(value)) : 'Error';
            break;
        case '1/x':
            currentValue = value !== 0 ? String(1 / value) : 'Error';
            break;
        case '+/-':
            currentValue = String(value * -1);
            break;
        case '%':
            currentValue = previousValue ? String((previousValue * value) / 100) : '0';
            break;
    }
    updateDisplay();
}

// Сброс
function clearAll() {
    currentValue = '0';
    previousValue = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function clearEntry() {
    currentValue = '0';
    updateDisplay();
}

function backspace() {
    currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
    updateDisplay();
}

// Обработчики событий
digitalButtons.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;
    const btn = e.target.textContent;

    if (/\d/.test(btn)) inputDigit(btn);
    else if (btn === '.') inputDecimal();
    else if (['+', '-', '*', '/'].includes(btn)) handleOperator(btn);
    else if (btn === '=') {
        if (operator && previousValue !== null) {
            currentValue = String(calculate(previousValue, parseFloat(currentValue), operator));
            previousValue = null;
            operator = null;
            updateDisplay();
        }
    }
    else if (['sqrt', '1/x', '+/-', '%'].includes(btn)) handleSpecial(btn);
});

controlButtons.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;
    const btn = e.target.textContent;

    if (btn === 'C') clearAll();
    else if (btn === 'CE') clearEntry();
    else if (btn === 'Backspace') backspace();
});

// Память
memoryButtons.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;
    const btn = e.target.textContent;

    switch (btn) {
        case 'MC': memory = 0; break;
        case 'MR': currentValue = String(memory); updateDisplay(); break;
        case 'MS': memory = parseFloat(currentValue); break;
        case 'M+': memory += parseFloat(currentValue); break;
    }
});

// Кнопка закрытия окна
document.getElementById('close-button').addEventListener('click', () => {
    window.close();
});