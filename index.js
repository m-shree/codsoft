let res = document.getElementById('res');
let history = document.getElementById('history');

function Solve(val) {
    res.value += val;
}

function Clear() {
    res.value = '';
    history.textContent = '';
}

function Back() {
    res.value = res.value.slice(0, -1);
}

function Result() {
    try {
        history.textContent = res.value;
        res.value = eval(res.value.replace(/x/g, '*'));
    } catch (error) {
        res.value = 'Error';
    }
}
