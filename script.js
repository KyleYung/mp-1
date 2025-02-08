function addition() {
    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);
    let output = 1;
    if (isNaN(first) || isNaN(second)) {
        output = "Invalid Input";
        document.getElementById("output").innerHTML = output;
    } else {
        output = first + second
        document.getElementById("output").innerHTML = String(output);

        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function subtraction() {
    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);
    let output = 1;
    if (isNaN(first) || isNaN(second)) {
        output = "Invalid Input";
        document.getElementById("output").innerHTML = output;
    } else {
        output = first - second
        document.getElementById("output").innerHTML = String(output);
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function multiplication() {
    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);
    let output = 1;
    if (isNaN(first) || isNaN(second)) {
        output = "Invalid Input";
        document.getElementById("output").innerHTML = output;
    } else {
        output = first * second
        document.getElementById("output").innerHTML = String(output);
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function division() {
    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);
    let output = 1;
    if (isNaN(first) || isNaN(second)) {
        output = "Invalid Input";
        document.getElementById("output").innerHTML = output;
    } else {
        output = first / second
        document.getElementById("output").innerHTML = String(output);
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function power() {
    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);
    let output = 1;
    if (isNaN(first) || isNaN(second)) {
        output = "Invalid Input";
        document.getElementById("output").innerHTML = output;
    } else {
        if (second >= 0) {
            for (let i = 0; i < second; i++) {
                output = output * first;
            }
        } else {
            for (let i = 0; i < -second; i++) {
                output = output * first;
            }
            output = 1/output;
        }
        document.getElementById("output").innerHTML = String(output);
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black";
        }
    }
}

function reset() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML = "";
}