const inputs = document.getElementsByClassName('required-input');
const radioContainer = document.querySelector('.radio-container-gender');
const radioInputs = radioContainer.querySelectorAll('input[type=radio]');
// const checkboxContainer = document.querySelector('.checkbox');
// const boxInputs = checkboxContainer.querySelectorAll('input[type=checkbox]');
const warningmessage = document.getElementsByClassName('warningMessage');
const errorMessage = document.querySelectorAll('.warningMessage');


function changeBackground() {
    for(var i = 0; i < inputs.length; i++){
        if (inputs[i].value == '') {
            inputs[i].style.backgroundColor = 'yellow';
            warningmessage[i].style.display = 'block';
        } else {
            inputs[i].style.backgroundColor = '';
            warningmessage[i].style.display = 'none';
        }
    }
    for(var i = 0; i < radioInputs.length; i++){
        if (radioInputs[i].checked) {
            radioContainer.style.backgroundColor = '';
            errorMessage[2].style.display = 'none';
        } else {
            radioContainer.style.backgroundColor = 'yellow';
            errorMessage[2].style.display = 'block';
        }
    }
    // for(var i = 0; i < boxInputs.length; i++){
    //     if (boxInputs[i].checked) {
    //         checkboxContainer.style.backgroundColor = '';
    //     } else {
    //         checkboxContainer.style.backgroundColor = 'yellow';
    //     }
    // }
}

function checkBackgroundColor() {
    for(var i = 0; i < inputs.length; i++){
        if (inputs[i].value == '') {
            inputs[i].style.backgroundColor = 'yellow';
            warningmessage[i].style.display = 'block';
        } else {
            inputs[i].style.backgroundColor = '';
            warningmessage[i].style.display = 'none';
        }
    }
    for(var i = 0; i < radioInputs.length; i++){
        if (radioInputs[i].checked) {
            radioContainer.style.backgroundColor = '';
            errorMessage[2].style.display = 'none';
        } else {
            radioContainer.style.backgroundColor = 'yellow';
            errorMessage[2].style.display = 'block';
        }
    }
}

for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('input', checkBackgroundColor);
}

for (radio in radioInputs) {
    radioInputs[radio].onclick = function () {
        radioContainer.style.backgroundColor = '';
        errorMessage[2].style.display = 'none';
    }
}
