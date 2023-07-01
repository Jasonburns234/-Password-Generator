let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passOne = document.getElementById("passDisplayOne");
let passTwo = document.getElementById("passDisplayTwo");

let totalNumbers = 15;
let count = 0;
let countTwo = 0;
let countThree = 0;

function generatePassword() {
    passOne.textContent = "";
    passTwo.textContent = "";
    if (characters.length === 0) {
        passOne.textContent = "Nothing to Input";
        passTwo.textContent = "Nothing to Input";
    } else {
        for (var i = 0; i < totalNumbers; i++) {
            passOne.textContent += characters[Math.floor(Math.random() * characters.length)];
            passTwo.textContent += characters[Math.floor(Math.random() * characters.length)];
        }
    }
}

function addMore() {
    if (totalNumbers < 18) {
        document.getElementById("quantity").textContent = ++totalNumbers;
        document.getElementById("quantity").style.color = "#fff";
    } else {
        document.getElementById("quantity").style.color = "red";
    }
}

function addLess() {
    if (totalNumbers > 5) {
        document.getElementById("quantity").textContent = --totalNumbers;
        document.getElementById("quantity").style.color = "#fff";
    } else {
        document.getElementById("quantity").style.color = "red";
    }
}

function numberOnly() {
    passOne.textContent = "";
    passTwo.textContent = "";
    let checkerNumbers = document.getElementById("numbers");

    if (count === 0) {
        checkerNumbers.style.backgroundColor = "red";
        count++;
        checkerNumbers.textContent = "Add Numbers";
        characters = characters.filter(character => isNaN(Number(character)));
    } else if (count === 1) {
        checkerNumbers.style.backgroundColor = "#10B981";
        checkerNumbers.textContent = "Remove Numbers";
        count--;
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
}

function lettersOnly() {
    passOne.textContent = "";
    passTwo.textContent = "";
    let checkerLetters = document.getElementById("letters");

    if (countTwo === 0) {
        checkerLetters.style.backgroundColor = "red";
        countTwo++;
        checkerLetters.textContent = "Add Letters";
        characters = characters.filter(character => !(/[a-zA-Z]/.test(character)));
    } else if (countTwo === 1) {
        checkerLetters.style.backgroundColor = "#10B981";
        checkerLetters.textContent = "Remove Letters";
        countTwo--;
        characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
}

function specialOnly() {
    passOne.textContent = "";
    passTwo.textContent = "";
    let checkerSpecial = document.getElementById("special");
    const special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

    if (countThree === 0) {
        checkerSpecial.style.backgroundColor = "red";
        countThree++;
        checkerSpecial.textContent = "Add special Characters";
        characters = characters.filter(character => !special.includes(character));
    } else if (countThree === 1) {
        checkerSpecial.style.backgroundColor = "#10B981";
        checkerSpecial.textContent = "Remove Characters";
        countThree--;
        characters.push(...special);
    }
}
