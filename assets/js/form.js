// set constants to the form inputs and buttons
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// add event listener to the submit button
submitButton.addEventListener('click', function (event) {
    // prevent default to allow following code to run
     event.preventDefault();
    //  while loops to prompt user input if fields were left empty
     while(!(username.value)){
       username.value = prompt('please enter a username')
     
     }
     while(!(title.value)){
       title.value = prompt('please enter a title')
       
     }
     while(!(content.value.trim())){
       content.value = prompt('please enter some content')
       
     }
    //  make a new variable oldPosts and set it equal to the posts pulled from local storage or an empty array if there is nothin already there
     var posts = JSON.parse(localStorage.getItem('posts'))||[]
    //  construct a new post from the values collected in the form or by the prompts
     const blogPost = {
       username: username.value,
       title: title.value,
       content: content.value.trim(),
     };
  
    //  add the new post to the list of posts
     posts.push(blogPost)
    //  update local storage by sending the new posts 
     localStorage.setItem('posts', JSON.stringify(posts));
 
//  redirect the user to the blog page
 window.location = './blog.html'
 })
