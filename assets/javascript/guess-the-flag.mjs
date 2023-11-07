// Import 'js-yaml' directly from the CDN
import jsyaml from 'https://cdn.skypack.dev/js-yaml';

let randomCountry;
let data;

// Function to fetch and parse YAML data
async function fetchYamlData() {
    const response = await fetch('/_data/countries.yml');
    const text = await response.text();
    data = jsyaml.load(text);
}

// Function to display a random flag
function displayRandomFlag() {
    // Choose a random index within the data array
    const randomIndex = Math.floor(Math.random() * data.length);

    // Get the random country's flag URL
    randomCountry = data[randomIndex];
    const flagImage = document.getElementById('country-flag');
    flagImage.src = randomCountry.flag;
    flagImage.dataset.correctName = randomCountry.name;
}

// Function to display a message on the screen
function showMessage(message) {
  const messageElement = document.getElementById('message-container');
  messageElement.textContent = message;
  messageElement.style.display = 'block';
}

// Function to hide the loading message
function hideMessage() {
  const messageElement = document.getElementById('message-container');
  messageElement.style.display = 'none';
}

// Function to show the loading message with changing ellipsis
function showLoadingMessage() {
  const loadingMessage = document.getElementById('loading-message');
  loadingMessage.style.display = 'block';

  let counter = 0; // Initialize a counter for the ellipsis
  loadingMessage.textContent = 'Loading';

  const loadingInterval = setInterval(function () {
    loadingMessage.textContent += '.'; // Add a dot to the message
    counter++;
  }, 800); // Update every 1 second (1000 milliseconds)

  // Clear the interval after 3 seconds (3 cycles)
  setTimeout(function () {
    clearInterval(loadingInterval);
  }, 3200); // Stop after 3 seconds
}


// Function to hide the loading message
function hideLoadingMessage() {
  const loadingMessage = document.getElementById('loading-message');
  loadingMessage.style.display = 'none';
}

// Function to hide the loading message
function hideCountryName() {
  const countryName = document.getElementById('country-name');
  countryName.style.display = 'none';
}

function showCountryName() {
  const countryName = document.getElementById('country-name');
  countryName.style.display = 'block';
  countryName.textContent = 'Correct country: '+ randomCountry.name;
}

function clearUserGuess() {
  document.getElementById('user-guess').value = '';
}

// Function to validate the user's guess
function validateGuess() {
  const userGuess = document.getElementById('user-guess').value;
  const correctName = document.getElementById('country-flag').dataset.correctName;

  if (userGuess.toLowerCase() === correctName.toLowerCase()) {
      showMessage('Correct!');
  } else {
      showMessage('Incorrect');
      showCountryName()
  }

  showLoadingMessage()

  // Add a 3-second delay before calling runGame
  setTimeout(function () {
    runGame();
  }, 3000);
}

function skipGuess() {
  runGame();
}

// Fetch YAML data and display a random flag
function runGame() {
  clearUserGuess()
  hideMessage();
  hideLoadingMessage();
  hideCountryName();
  displayRandomFlag();
}

function addEventListeners() {
  const skipButton = document.getElementById('skip-guess');
  skipButton.addEventListener('click', skipGuess);
  const submitButton = document.getElementById('submit-guess');
  submitButton.addEventListener('click', validateGuess);
}

async function gameInit() {
  try {
    await fetchYamlData();
    addEventListeners();
    hideLoadingMessage();
    runGame();
  } catch (error) {
    console.error('Error initializing the game:', error);
  }
}

// Call the runGame function when the page loads
window.addEventListener('load', gameInit);