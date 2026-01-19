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