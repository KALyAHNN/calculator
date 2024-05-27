function appendToExpression(value) {
    var expressionInput = document.getElementById('expression');
    if (expressionInput.value === 'Error') {
        clearExpression();
    }
    expressionInput.value += value;
    scrollExpression();
}

function calculate() {
    try {
        var expression = document.getElementById('expression').value;
        var result = eval(expression);
        document.getElementById('expression').value = result;
    } catch (error) {
        document.getElementById('expression').value = 'Error';
    }
}

function clearExpression() {
    document.getElementById('expression').value = '';
}

function backspace() {
    var expressionInput = document.getElementById('expression');
    var exp = expressionInput.value;
    //used ChatGPT to write this below statement
    expressionInput.value = exp.slice(0, exp.length - 1);
    scrollExpression();
}


function scrollExpression() {
    var expressionInput = document.getElementById('expression');
    //used ChatGPT to write this below statement
    expressionInput.scrollLeft = expressionInput.scrollWidth;
}
