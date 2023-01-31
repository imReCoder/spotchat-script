// create a chat widget that can be embedded in any website
// this is the main entry point for the chat widget
// this file is responsible for creating the chat widget and
// loading the chat widget into the DOM
alert("spot chat test");
let isWidgetOpen = false;
const body = document.querySelector('body');
const mainContainer = document.createElement('div');
mainContainer.style.position = "fixed";
mainContainer.style.width = '100vw';
mainContainer.style.height = '100vh';


const chatButton = document.createElement('div');

chatButton.innerHTML = 'Chat';

const widget = document.createElement('div');
widget.style.width = '300px';
widget.style.height = '600px';
widget.style.backgroundColor = 'red';
widget.style.display = 'none';

chatButton.addEventListener('click', () => {
  if (isWidgetOpen) {
    widget.style.display = 'none';
    isWidgetOpen = false;
  } else {
    widget.style.display = 'block';
    isWidgetOpen = true;
  }
});

body.appendChild(chatButton);
body.appendChild(widget);

