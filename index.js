
const addNumbers = () => {
    const inputOne = document.getElementById('inputOne');
    const inputTwo = document.getElementById('inputTwo');
    const result = document.getElementById('result');

    if (inputOne && inputTwo && result) {
        const sum = parseInt(inputOne.value) + parseInt(inputTwo.value);
        result.innerHTML = sum;
    } else {
        console.error("One or more elements not found!");
    }
};

const subtractNumbers = () => {
    const inputOne = document.getElementById('inputOne');
    const inputTwo = document.getElementById('inputTwo');
    const result = document.getElementById('result');

    if (inputOne && inputTwo && result) {
        const sub = parseInt(inputOne.value) - parseInt(inputTwo.value);
        result.innerHTML = sub;
    } else {
        console.log("One or more elements not found!");
    }
};

const multiplyNumbers = () => {
    const inputOne = document.getElementById('inputOne');
    const inputTwo = document.getElementById('inputTwo');
    const result = document.getElementById('result');

    if (inputOne && inputTwo && result) {
        const sub = parseInt(inputOne.value) * parseInt(inputTwo.value);
        result.innerHTML = sub;
    } else {
        console.log("One or more elements not found!");
    }
};

const divisionNumbers = () => {
    const inputOne = document.getElementById('inputOne');
    const inputTwo = document.getElementById('inputTwo');
    const result = document.getElementById('result');

    if (inputOne && inputTwo && result) {
        const sub = parseInt(inputOne.value) / parseInt(inputTwo.value);
        result.innerHTML = sub;
    } else {
        console.log("One or more elements not found!");
    }
};