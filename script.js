const button = document.querySelector('button');

// Initialize a counter to track the number of clicks
let counter = 0;

button.addEventListener('click', () => {
  // Increment the counter
  counter++;

  // Set the button's initial position
  button.style.position = 'relative';

  // Add a transition to the button so that it moves smoothly
  button.style.transition = 'all 0.3s';

  // Set the button's text based on the number of clicks
  if (counter === 1) {
    button.innerText = "Opps";
    button.style.left = '600px';
    button.style.top = '250px';
  } else if (counter === 2) {
    button.innerText = "Cuba lagi";
    button.style.left = '90px';
    button.style.top = '300px';

  } else if (counter === 3) {
    button.innerText = "😆😆😆😆😆";
    button.style.left = '400px';
    button.style.top = '100px';

  } else if (counter === 4) {

    const a = document.createElement('a');
    a.style.left = '100px';
    a.style.top = '100px';

    // Set the a element's attributes
    a.innerText = "Okay, last sudah hahaha";
    a.href = "part2real.html";
    a.style.display = "inline-block";
    a.style.padding = "10px 20px";
    a.style.border = "0px #333";
    a.style.color = "white";
    a.style.textDecoration = "none";
    a.style.backgroundColor = "red"
    a.style.borderRadius = "5px";

    // Replace the button with the a element
    button.parentNode.replaceChild(a, button);
  }
});