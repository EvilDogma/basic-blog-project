// pull the current dark/light mode preference from local storage
let mode = JSON.parse(localStorage.getItem('mode')) || 'dark'
console.log(mode)
// Add dark mode class to the body if dark was saved
if (mode === 'dark') {
    console.log('remembered dark mode')
    document.body.classList.add('dark-mode')
}

// add and event listener to the Toggle button
const toggleButton = document.querySelector('.mode')
toggleButton.addEventListener('click', function(){
//    use the build in toggle method to add or remove the 'dark-mode' class to the body
    document.body.classList.toggle('dark-mode')
    // logic to console out the change and change the value of mode to be passed to local storage
    if (document.body.classList.contains('dark-mode')) {
        console.log('changed to dark mode')
        mode = 'dark'
    } else {
        console.log('changed to light mode')
        mode = 'light'
    }
    // reset the localStorage value to reflect changed mode
    localStorage.setItem('mode', JSON.stringify(mode))
})
