function addingEventListener() {
const input = document.getElementById('button'); // I am grabbing the element called Button

function clickAlert() { //I create a function called CLickAlert that returns a message stating "I been clicked" 
  alert('I was clicked!'); // This same function can be anonymous as well. 
}

input.addEventListener('click', clickAlert); //here I add my event listener to my input and pass my two arguments
                                            //1. listen for the click. 2. once button is clicked pass that call back function clickAlert
}

addingEventListener()
//Call the function 