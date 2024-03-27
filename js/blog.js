// function to insert posts into the page 
function renderPost(post) {
    // checks if the post has values
    if (post !== null) {
        // uses template literal to structure the post
        const card = `
      <div class = "post">
          <h2 class = "title">${post.title}</h2>
          <p class = "content">${post.content}</p>
          <p class = "author">Posted By: ${post.username}</p>
      </div>
      `
    //   adds posts to the div with id = 'blog' and inserts them at the end of the div
        document.getElementById("blog").insertAdjacentHTML('beforeend', card);

    }
}

window.onload = (event) => {
    event.preventDefault();
    // pull posts from local storage
    var posts = JSON.parse(localStorage.getItem('posts')) || []
    // loop through all posts and render their objects to the page
    for (post of posts) {
        renderPost(post)
    }
}
// Added an event listener to direct back to the form page when the Back button is clicked
backButton.addEventListener('click', function (event) {
    window.location.href = './index.html'
})