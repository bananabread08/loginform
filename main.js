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

eval("const emailEl = document.getElementById('email');\nconst countryEl = document.getElementById('country');\nconst zipcodeEl = document.getElementById('zip-code');\nconst passwordEl = document.getElementById('password');\nconst passwordCheckEl = document.getElementById('password-check');\nconst form = document.getElementById('form');\n// const signin = document.getElementById('sign-in');\n\nconst profileFactory = (email, country, zipcode, password, passwordCheck) => ({\n  email, country, zipcode, password, passwordCheck,\n});\n\n// check errors/successful inputs\nconst showErrorFor = (input, message) => {\n  const formDiv = input.parentElement;\n  const small = formDiv.querySelector('small');\n  small.textContent = `${message}`;\n  formDiv.className = 'form-input error';\n};\n\nconst showSucessFor = (input) => {\n  const formDiv = input.parentElement;\n  formDiv.className = 'form-input success';\n};\n//\n\n// validation\nconst validateEmail = (email) => {\n  if (email === '') {\n    showErrorFor(emailEl, 'Email Address is blank. Try again.');\n  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/.test(email)) {\n    showErrorFor(emailEl, 'Please submit a valid Email.');\n  } else showSucessFor(emailEl);\n};\nconst validateCountry = (country) => {\n  if (country === '') {\n    showErrorFor(countryEl, 'Country is blank. Try again');\n  } else {\n    showSucessFor(countryEl);\n  }\n};\nconst validateZipCode = (zipcode) => {\n  if (zipcode) showSucessFor(zipcodeEl);\n};\n\nconst validatePassword = (password, passwordCheck) => {\n  if (password === '') showErrorFor(passwordEl, 'Password is blank. Try again');\n  else showSucessFor(passwordEl);\n  if (passwordCheck === '') showErrorFor(passwordCheckEl, 'Confirm Password is blank. Try again');\n  else if (password !== passwordCheck) showErrorFor(passwordCheckEl, 'Passwords do not match');\n  else showSucessFor(passwordCheckEl);\n};\n\nconst getAndCheckInputs = () => {\n  const newProfile = profileFactory(emailEl.value, countryEl.value,\n    zipcodeEl.value, passwordEl.value, passwordCheckEl.value);\n  validateEmail(newProfile.email);\n  validateCountry(newProfile.country);\n  validateZipCode(newProfile.zipcode);\n  validatePassword(newProfile.password, newProfile.passwordCheck);\n};\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  getAndCheckInputs();\n});\n\n\n//# sourceURL=webpack://loginform/./src/index.js?");

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