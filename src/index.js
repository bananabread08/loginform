const emailEl = document.getElementById('email');
const countryEl = document.getElementById('country');
const zipcodeEl = document.getElementById('zip-code');
const passwordEl = document.getElementById('password');
const passwordCheckEl = document.getElementById('password-check');
const form = document.getElementById('form');
// const signin = document.getElementById('sign-in');

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
    showErrorFor(emailEl, 'Email Address is blank. Try again.');
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    showErrorFor(emailEl, 'Please submit a valid Email.');
  } else showSucessFor(emailEl);
};
const validateCountry = (country) => {
  if (country === '') {
    showErrorFor(countryEl, 'Country is blank. Try again');
  } else {
    showSucessFor(countryEl);
  }
};
const validateZipCode = (zipcode) => {
  if (zipcode) showSucessFor(zipcodeEl);
};

const validatePassword = (password, passwordCheck) => {
  if (password === '') showErrorFor(passwordEl, 'Password is blank. Try again');
  else showSucessFor(passwordEl);
  if (passwordCheck === '') showErrorFor(passwordCheckEl, 'Confirm Password is blank. Try again');
  else if (password !== passwordCheck) showErrorFor(passwordCheckEl, 'Passwords do not match');
  else showSucessFor(passwordCheckEl);
};

const getAndCheckInputs = () => {
  const newProfile = profileFactory(emailEl.value, countryEl.value,
    zipcodeEl.value, passwordEl.value, passwordCheckEl.value);
  validateEmail(newProfile.email);
  validateCountry(newProfile.country);
  validateZipCode(newProfile.zipcode);
  validatePassword(newProfile.password, newProfile.passwordCheck);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getAndCheckInputs();
});
