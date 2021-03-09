const emailEl = document.getElementById('email');
const countryEl = document.getElementById('country');
const zipcodeEl = document.getElementById('zip-code');
const passwordEl = document.getElementById('password');
const passwordCheckEl = document.getElementById('password-check');
const form = document.getElementById('form');

const profileFactory = (email, country, zipcode, password, passwordCheck) => ({
  email, country, zipcode, password, passwordCheck,
});

// check errors/successful inputs
const showErrorFor = (input, message) => {
  const formDiv = input.parentElement;
  const small = formDiv.querySelector('small');
  small.textContent = `${message}`;
  formDiv.className = 'form-input error';
};

const showSucessFor = (input) => {
  const formDiv = input.parentElement;
  formDiv.className = 'form-input success';
};
//

// validation
const validateEmail = (email) => {
  if (email === '') {
    showErrorFor(emailEl, 'Email Address is required and cannot be blank.');
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    showErrorFor(emailEl, 'Please submit a valid Email.');
  } else showSucessFor(emailEl);
};
const validateCountry = (country) => {
  if (country === '') {
    showErrorFor(countryEl, 'Country is required and cannot be blank.');
  } else {
    showSucessFor(countryEl);
  }
};
const validateZipCode = (zipcode) => {
  const regex = /^\[0-9]{5}[-\s]?(?:[0-9]{4})?$/gm;
  if (!regex.test(zipcode) && (zipcode.length !== 9) && (zipcode !== '')) {
    showErrorFor(zipcodeEl, 'Invalid Zip Code. Please input a 9 digit Number.');
  } else showSucessFor(zipcodeEl);
};
const validatePassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;
  if (password === '') showErrorFor(passwordEl, 'Password is required and cannot be blank.');
  else if (!regex.test(password)) showErrorFor(passwordEl, 'Password must be 8 characters long, at least one letter, one number and one special character:');
  else showSucessFor(passwordEl);
};

const validateInput = (event) => {
  const inputId = event.target.id;
  const inputValue = event.target.value;

  // eslint-disable-next-line default-case
  switch (inputId) {
    case 'email':
      validateEmail(inputValue);
      break;
    case 'country':
      validateCountry(inputValue);
      break;
    case 'zip-code':
      validateZipCode(inputValue);
      break;
    case 'password':
      validatePassword(inputValue);
  }
};

const getAndCheckInputs = () => {
  const newProfile = profileFactory(emailEl.value, countryEl.value,
    zipcodeEl.value, passwordEl.value, passwordCheckEl.value);
  return newProfile;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getAndCheckInputs();

  if (emailEl.parentElement.className === 'form-input success'
  && countryEl.parentElement.className === 'form-input success'
  && zipcodeEl.parentElement.className === 'form-input success'
  && passwordEl.parentElement.className === 'form-input success') alert('Valid!');
});

form.addEventListener('input', (e) => {
  validateInput(e);
});
