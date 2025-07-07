import strings from './strings.json'
// frontend/index.js
fetch('./strings.json')
  .then(response => response.json())
  .then(strings => {
    // Get the element by its ID
        const greetingTitle = document.getElementById('sign-in-title');
        const greetingDes = document.getElementById('')
        // Add a string to it
        greetingTitle.value = strings.greeting;

  });

