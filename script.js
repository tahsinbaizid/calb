let screen = document.getElementById("screen");

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = Function("return " + screen.value)();
    } catch {
        screen.value = "Error";
        setTimeout(() => screen.value = "", 900);
    }
}

document.addEventListener("keydown", function(event) {
    if (/[0-9+\-*/.]/.test(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearScreen();
    }
});