document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number = document.getElementById('number').value;
    const result = document.getElementById('result');
    result.innerHTML = '';

    const system = identifyNumberSystem(number);
    if (system) {
        result.innerHTML += `<p>O valor <strong>${number}</strong> pertence ao sistema <strong>${system}</strong>.</p>`;
        result.innerHTML += getConversions(number, system);
    } else {
        result.innerHTML += `<p>O valor <strong>${number}</strong> não pertence a nenhum sistema de numeração válido.</p>`;
    }
});

function identifyNumberSystem(number) {
    if (isBinary(number)) {
        return 'Binário';
    } else if (isOctal(number)) {
        return 'Octal';
    } else if (isDecimal(number)) {
        return 'Decimal';
    } else if (isHexadecimal(number)) {
        return 'Hexadecimal';
    } else {
        return null;
    }
}

function isBinary(number) {
    return /^[01]+$/.test(number);
}

function isOctal(number) {
    return /^[0-7]+$/.test(number);
}

function isDecimal(number) {
    return /^[0-9]+$/.test(number);
}

function isHexadecimal(number) {
    return /^[0-9A-Fa-f]+$/.test(number);
}

function getConversions(number, system) {
    let result = '';
    let decimalValue;

    switch (system) {
        case 'Binário':
            decimalValue = parseInt(number, 2);
            result += `Decimal: ${decimalValue}`;
            result += `     Octal: ${decimalValue.toString(8)}`;
            result += `     Hexadecimal: ${decimalValue.toString(16).toUpperCase()}`;
            break;
        case 'Octal':
            decimalValue = parseInt(number, 8);
            result += `Decimal: ${decimalValue}`;
            result += `     Binário: ${decimalValue.toString(2)}`;
            result += `     Hexadecimal: ${decimalValue.toString(16).toUpperCase()}`;
            break;
        case 'Decimal':
            decimalValue = parseInt(number, 10);
            result += `Binário: ${decimalValue.toString(2)}`;
            result += `     Octal: ${decimalValue.toString(8)}`;
            result += `     Hexadecimal: ${decimalValue.toString(16).toUpperCase()}`;
            break;
        case 'Hexadecimal':
            decimalValue = parseInt(number, 16);
            result += `Decimal: ${decimalValue}`;
            result += `     Binário: ${decimalValue.toString(2)}`;
            result += `     Octal: ${decimalValue.toString(8)}`;
            break;
        default:
            result += `O valor não pôde ser convertido.`;
    }

    return result;
}


function predefinedConversions() {
    const examples = [
        { value: '9585757', system: 'Decimal' },
        { value: '011110111011', system: 'Binário' },
        { value: '24FED', system: 'Hexadecimal' },
        { value: '54721', system: 'Octal' }
    ];

    examples.forEach(example => {
        const result = getConversions(example.value, example.system);
        console.log(`Valor: ${example.value} (${example.system})`);
        console.log(result);
        console.log('----------------------------');
    });
}

predefinedConversions();
