document.getElementById('get-joke-btn').addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            return response.json(); // Explicitly returning the converted response
        })
        .then(joke => {
            document.getElementById('joke-setup').textContent = joke.setup;
            document.getElementById('joke-punchline').textContent = joke.punchline;
        })
        .catch(error => {
            console.log("Error fetching joke:", error);
            document.getElementById('joke-setup').textContent = "Oops! Something went wrong.";
            document.getElementById('joke-punchline').textContent = "";
            return error; // Explicitly returning the error
        });
});
