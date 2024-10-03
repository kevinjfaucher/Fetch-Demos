const postsContainer = document.getElementById("posts-container");

// Fetch data from Reddit AWW subreddit
fetch("https://www.reddit.com/r/aww/.json")
    .then(response => response.json()) // Convert response to JSON format
    .then(redditData => {
        // `redditData` contains the entire JSON response from the Reddit API
        // We want to access the posts, which are inside `redditData.data.children`
        const posts = redditData.data.children;

        // Loop through each post object in the array
        posts.forEach(post => {
            const postData = post.data; // Extract data for each individual post
            
            // Create HTML elements to display post data
            const postDiv = document.createElement("div");
            const postTitle = document.createElement("h2");
            const postImage = document.createElement("img");
            const postLink = document.createElement("a");

            // Set the content and attributes for each HTML element
            postTitle.textContent = postData.title; // Set the title of the post
            postImage.src = postData.thumbnail !== "self" ? postData.thumbnail : ""; // Use the thumbnail if available
            postLink.href = `https://www.reddit.com${postData.permalink}`; // Link to the full post
            postLink.textContent = "View Post"; // Text for the link

            // Add the title, image, and link elements to the post container
            postDiv.appendChild(postTitle);
            if (postImage.src) {
                postDiv.appendChild(postImage); // Only add the image if it exists
            }
            postDiv.appendChild(postLink);

            // Append the entire post container to the main posts container in the HTML
            postsContainer.appendChild(postDiv);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error); // Log any errors
    });
