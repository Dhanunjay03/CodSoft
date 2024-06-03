let mode = 'deg'; // Default mode is degrees

function appendToDisplay(value) {
    document.getElementById('expression').value += value;
}

function clearDisplay() {
    document.getElementById('expression').value = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('expression').value;
        let result = evalMathExpression(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        alert('Error: Invalid expression');
        }
}

function evalMathExpression(expression) {
// Replace trigonometric functions with Math object equivalents
    if (mode === 'deg') {
        expression = expression.replace(/sin\(([^)]+)\)/g, function(match, p1) {
            return Math.sin(degToRad(parseFloat(p1)));
            });
            expression = expression.replace(/cos\(([^)]+)\)/g, function(match, p1) {
                return Math.cos(degToRad(parseFloat(p1)));
        });
            expression = expression.replace(/tan\(([^)]+)\)/g, function(match, p1) {
                return Math.tan(degToRad(parseFloat(p1)));
            });
    } else if (mode === 'rad') {
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
}
            
// Evaluate the expression
    return eval(expression);
}

function backspace() {
    let expression = document.getElementById('expression').value;
    document.getElementById('expression').value = expression.slice(0, -1);
}  

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function changeMode() {
    mode = document.getElementById('mode').value;
} 