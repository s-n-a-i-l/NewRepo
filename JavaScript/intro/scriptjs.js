// JavaScript source code
function Factorial(n)
{
    let f = BigInt(1);
    //document.write(typeof (f));
    //document.write("<pre>");//preformatted учитываются пробелы и знаки переноса
    for (let i = 1n; i <= n; i++)
    {
        f *= i;
        //document.writeln(`${i} != ${f}`);
    }
    //document.write("</pre>");
    return f;
}
function Factorial2()
{
    let source_input_field = document.getElementById("factorial-source");
    //alert("Привет");
    let source_value = source_input_field.value;
    let factorial_result = document.getElementById("factorial-result");
    factorial_result.innerHTML = Factorial(source_value); 
}

function Degree2()
{
    let source_input_field = document.getElementById("number");
    let source_input_field2 = document.getElementById("exponent");
    
    let source_value = source_input_field.value;
    let source_value2 = source_input_field2.value;
    let degree_result = document.getElementById("degree-result");
    degree_result.innerHTML = Degree(source_value, source_value2);
}

function Degree(n,e)
{
    let number = n;
    let exponent = e;
    let f = n ** e;

    return f;
}

function Fibonacci2() {
    let limit_field = document.getElementById("fib-limit");
    let count_field = document.getElementById("fib-count");

    let limit_value = limit_field.value;
    let count_value = count_field.value;

    let fib_result = document.getElementById("fib-result");

    if (limit_value !== "") {
        fib_result.innerHTML = FibonacciByLimit(limit_value);
    } else if (count_value !== "") {
        fib_result.innerHTML = FibonacciByCount(count_value);
    } else {
        fib_result.innerHTML = "Введите предел или количество.";
    }
}

function FibonacciByLimit(limit) {
    let sequence = [];
    let a = 0n;
    let b = 1n;
    sequence.push(a);

    while (b <= BigInt(limit)) {
        sequence.push(b);
        let next = a + b;
        a = b;
        b = next;
    }

    return Array.from(sequence).join(", ");
}

function FibonacciByCount(count) {
    let n = parseInt(count);
    if (n <= 0) return "0";

    let sequence = [0n];
    if (n === 1) return "0";

    let a = 0n;
    let b = 1n;
    sequence.push(b);

    for (let i = 2; i < n; i++) {
        let next = a + b;
        a = b;
        b = next;
        sequence.push(b);
    }

    return Array.from(sequence).join(", ");
}