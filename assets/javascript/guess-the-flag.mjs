// Import 'js-yaml' directly from the CDN
import jsyaml from 'https://cdn.skypack.dev/js-yaml';

// Function to fetch and parse YAML data
async function fetchYamlData() {
    const response = await fetch('/_data/countries.yml');
    const text = await response.text();
    return jsyaml.load(text);
}

// Function to display a random flag
function displayRandomFlag(data) {
    // Choose a random index within the data array
    const randomIndex = Math.floor(Math.random() * data.length);

    // Get the random country's flag URL
    const randomCountry = data[randomIndex];
    const flagImage = document.getElementById('country-flag');
    flagImage.src = randomCountry.flag;
    flagImage.dataset.correctName = randomCountry.name;
}

// Function to display a message on the screen
function showMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
}

// Function to show the loading message
function showLoadingMessage() {
  const loadingMessage = document.getElementById('loading-message');
  loadingMessage.style.display = 'block';
}

// Function to hide the loading message
function hideLoadingMessage() {
  const loadingMessage = document.getElementById('loading-message');
  loadingMessage.style.display = 'none';
}

// Function to validate the user's guess
function validateGuess() {
  const userGuess = document.getElementById('user-guess').value;
  const correctName = document.getElementById('country-flag').dataset.correctName;

  if (userGuess.toLowerCase() === correctName.toLowerCase()) {
      showMessage('Correct! You guessed the country name.');
  } else {
      showMessage('Incorrect.');
  }
  showLoadingMessage()
  // Add a 3-second delay before reloading the page
  setTimeout(function () {location.reload(); // Reload the page to move on to the next flag
  }, 3000);
}

// Fetch YAML data and display a random flag
fetchYamlData()
  .then(data => {
    displayRandomFlag(data);
    hideLoadingMessage();
    // Add an event listener to the submit button
    const submitButton = document.getElementById('submit-guess');
    submitButton.addEventListener('click', validateGuess);
  })
    .catch(error => {
        console.error('Error fetching YAML data:', error);
    });