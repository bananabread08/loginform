/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const emailEl = document.getElementById('email');\nconst countryEl = document.getElementById('country');\nconst zipcodeEl = document.getElementById('zip-code');\nconst passwordEl = document.getElementById('password');\nconst passwordCheckEl = document.getElementById('password-check');\nconst form = document.getElementById('form');\n\nconst profileFactory = (email, country, zipcode, password, passwordCheck) => ({\n  email, country, zipcode, password, passwordCheck,\n});\n\n// check errors/successful inputs\nconst showErrorFor = (input, message) => {\n  const formDiv = input.parentElement;\n  const small = formDiv.querySelector('small');\n  small.textContent = `${message}`;\n  formDiv.className = 'form-input error';\n};\n\nconst showSucessFor = (input) => {\n  const formDiv = input.parentElement;\n  formDiv.className = 'form-input success';\n};\n//\n\n// validation\nconst validateEmail = (email) => {\n  if (email === '') {\n    showErrorFor(emailEl, 'Email Address is required and cannot be blank.');\n  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/.test(email)) {\n    showErrorFor(emailEl, 'Please submit a valid Email.');\n  } else showSucessFor(emailEl);\n};\nconst validateCountry = (country) => {\n  if (country === '') {\n    showErrorFor(countryEl, 'Country is required and cannot be blank.');\n  } else {\n    showSucessFor(countryEl);\n  }\n};\nconst validateZipCode = (zipcode) => {\n  const regex = /^\\[0-9]{5}[-\\s]?(?:[0-9]{4})?$/gm;\n  if (!regex.test(zipcode) && (zipcode.length !== 9) && (zipcode !== '')) {\n    showErrorFor(zipcodeEl, 'Invalid Zip Code. Please input a 9 digit Number.');\n  } else showSucessFor(zipcodeEl);\n};\nconst validatePassword = (password) => {\n  const regex = /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/gm;\n  if (password === '') showErrorFor(passwordEl, 'Password is required and cannot be blank.');\n  else if (!regex.test(password)) showErrorFor(passwordEl, 'Password must be 8 characters long, at least one letter, one number and one special character:');\n  else showSucessFor(passwordEl);\n};\n\nconst validateInput = (event) => {\n  const inputId = event.target.id;\n  const inputValue = event.target.value;\n\n  // eslint-disable-next-line default-case\n  switch (inputId) {\n    case 'email':\n      validateEmail(inputValue);\n      break;\n    case 'country':\n      validateCountry(inputValue);\n      break;\n    case 'zip-code':\n      validateZipCode(inputValue);\n      break;\n    case 'password':\n      validatePassword(inputValue);\n  }\n};\n\nconst getAndCheckInputs = () => {\n  const newProfile = profileFactory(emailEl.value, countryEl.value,\n    zipcodeEl.value, passwordEl.value, passwordCheckEl.value);\n  return newProfile;\n};\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  getAndCheckInputs();\n\n  if (emailEl.parentElement.className === 'form-input success'\n  && countryEl.parentElement.className === 'form-input success'\n  && zipcodeEl.parentElement.className === 'form-input success'\n  && passwordEl.parentElement.className === 'form-input success') alert('Valid!');\n});\n\nform.addEventListener('input', (e) => {\n  validateInput(e);\n});\n\n\n//# sourceURL=webpack://loginform/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;