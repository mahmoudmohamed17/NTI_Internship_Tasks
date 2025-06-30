var current = '';
var previous = '';
var operation = '';
var textField = document.getElementById('Answer');

function EnterNumber(num) {
    if (num === '.' && current.includes('.')) return;
    if (current === '' && num === '.') {
        current = '0.';
        return;
    } else {
        current += num;
    }
    textField.value = current;
    console.log(textField.value);
}

function EnterOperator(op) {
    if (current === '') return;
    if (previous !== '') {
        EnterEqual();
    }
    operation = op;
    previous = current;
    current = '';
    textField.value = operation;
}

function EnterEqual() {
    var prev = parseFloat(previous)
    var curr = parseFloat(current)
    if (isNaN(current) || isNaN(previous)) return
    let result = 0.0
    switch (operation) {
        case '+':
            result = curr + prev;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = curr * prev;
            break;
        case '/':
            if (curr === 0) {
                alert('Alert!\nCannot divide by zero');
                return;
            }
            result = prev / curr;
            break;
        default:
            break;
    }
    current = result.toString();
    previous = '';
    operation = '';
    textField.value = current;
    console.log(textField.value);
}

function EnterClear() {
    current = '';
    previous = '';
    operation = '';
    textField.value = ''
}
