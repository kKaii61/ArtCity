function validateForm() {
  var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"]');
  var isValid = true;

  inputs.forEach(function(input) {
      if (input.value.trim() === '') {
          isValid = false;
          input.classList.add('error');
          showErrorText(input);
      } else {
          input.classList.remove('error');
          removeErrorText(input);
      }
  });

  // if (isValid) {
  //     alert('Form submitted successfully!');
  //     // Uncomment the line below to allow form submission
  //     // document.forms[0].submit();
  // } else {
  //     alert('Please fill in all the required fields.');
  // }
}

function showErrorText(input) {
  var errorText = input.parentNode.querySelector('.error-infor'); // Look for existing error text
  if (!errorText) {
      errorText = document.createElement('div');
      errorText.classList.add('error-infor');
      errorText.innerHTML = 'This field is required.';
      input.parentNode.appendChild(errorText);
  }
}

function removeErrorText(input) {
  var errorText = input.parentNode.querySelector('.error-infor');
  if (errorText) {
      errorText.parentNode.removeChild(errorText);
  }
}