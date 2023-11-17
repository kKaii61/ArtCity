const inputs = document.getElementsByClassName('required-input');
const inputAll  =document.querySelectorAll('.required-input');
const radioContainer = document.querySelector('.radio-container-gender');
const radioInputs = radioContainer.querySelectorAll('input[type=radio]');
const selectNation = document.querySelector("select");
// const checkboxContainer = document.querySelector('.checkbox');
// const boxInputs = checkboxContainer.querySelectorAll('input[type=checkbox]');
const warningmessage = document.getElementsByClassName('warningMessage');
const errorMessage = document.querySelectorAll('.warningMessage');

const pwrd_1 = document.querySelector("#pwrd_1");
const pwrd_2 = document.querySelector("#pwrd_2");
const errorText = document.querySelector(".error-text");
const signup = document.querySelector(".signup-btn");

const noteText = document.querySelector(".note");

const inputField = document.getElementById('note');
const charCount = document.getElementById('charCount');

let isSignupClicked = false;

  inputField.addEventListener('input', function() {
    charCount.textContent = inputField.value.length;
  });

function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
}

function checkPassword() {
    if(pwrd_1.value == "" && pwrd_2.value == ""){

    }else{
        if(pwrd_1.value != pwrd_2.value ){
            errorText.style.display = "block";
            errorText.textContent = "Confirm Password Not Match";
            return false;
          }else{
            errorText.style.display = "block";
            errorText.textContent = "Confirm Password Matched";
            return false;
          }
    }
}

function changeBackground() {
    isSignupClicked = true;
    for(var i = 0; i < inputs.length; i++){
        if (inputs[i].value == '') {
            inputs[i].style.backgroundColor = 'yellow';
            warningmessage[i].style.display = 'block';
            warningmessage[warningmessage.length-1].style.display = 'block';
        } else {
            inputs[i].style.backgroundColor = '';
            warningmessage[i].style.display = 'none';
            warningmessage[warningmessage.length-1].style.display = 'none';
        }
    }
    for(var i = 0; i < radioInputs.length; i++){
        if (radioInputs[0].checked || radioInputs[1].checked) {
            radioContainer.style.backgroundColor = '';
            errorMessage[2].style.display = 'none';
        } else {
            radioContainer.style.backgroundColor = 'yellow';
            errorMessage[2].style.display = 'block';
        }
    }

    if(selectNation.value == "") {
        warningmessage[3].style.display = 'block';
    } else{
        warningmessage[3].style.display = 'none';
    }

    // for(var i = 0; i < boxInputs.length; i++){
    //     if (boxInputs[i].checked) {
    //         checkboxContainer.style.backgroundColor = '';
    //     } else {
    //         checkboxContainer.style.backgroundColor = 'yellow';
    //     }
    // }
}

// for (radio in radioInputs) {
//     radioInputs[radio].onclick = function () {
//         radioContainer.style.backgroundColor = '';
//         errorMessage[2].style.display = 'none';
//     }
// }
