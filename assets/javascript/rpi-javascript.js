// Function to fetch and display temperature data
function fetchTemperatureData() {
    const apiKey = '091eb25ca95387755dd894278a3019a5'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cambridge,uk&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureElement = document.getElementById('temperature');
            temperatureElement.textContent = `Temperature in Cambridge, UK: ${data.main.temp}°C`;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

// Call the fetchTemperatureData function when the page loads
window.onload = fetchTemperatureData;