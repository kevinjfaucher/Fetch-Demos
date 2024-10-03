// Select the button and container elements
const button = document.getElementById('dogButton');
const container = document.getElementById('dogImageContainer');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Use fetch to get a random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            // Create an image element and set its source to the dog image URL
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'A Random Dog';

            // Clear any previous image and add the new image to the container
            container.innerHTML = '';
            container.appendChild(img);
        });
});
