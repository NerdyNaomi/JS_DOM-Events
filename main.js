console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById(`node1`);

node1.textContent = `I used the getElementById('node1') to access this!`;

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName(`node2`)[0];

node2.textContent = `I used the getElementsByClassName('node2') method to access this.`;

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let allH3 = document.getElementsByTagName(`h3`);

for (let h3 of allH3) {
  h3.textContent = `I used the getElementsByTagName("h3") method to access all of these ~ ~ ~`;
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let paragraph = document.createElement(`p`);

paragraph.textContent = `This node was created using the createElement() method :)`;

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector(`#parent`);

parent.appendChild(paragraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let link = document.createElement(`a`);

link.textContent = `I am an <a> tag!`;

// BONUS: Add a link href to the <a>
link.href = `https://github.com/NerdyNaomi`;

link.target = `_blank`;

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(link, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3Container = document.querySelector(`#exercise-container3`);

let oldChildNode = document.querySelector(`#N1`)

let newChildNode = document.createElement(`p`);

newChildNode.textContent = `New Child Node Replacement ' u '`

exercise3Container.replaceChild(newChildNode, oldChildNode);

// TODO: Remove the "New Child Node"
setTimeout(() => {
    exercise3Container.removeChild(newChildNode);
}, 5000)

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
let uL = document.createElement(`uL`);

// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
    let lI = document.createElement(`lI`);
    lI.textContent = item;
    // TODO: Append the new list items to the unordered list element
    uL.appendChild(lI);
})

// TODO: Append the unordered list to the `div#container` under exercise 4
document.querySelector(`#container`).appendChild(uL);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

/*
function show() {
    let newDiv = document.createElement(`div`);
    newDiv.textContent = `Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user`;
    
    document.body.appendChild(newDiv);
};
*/

function show () {
    let modalContainer = document.createElement(`div`);
    let modalCard = document.createElement(`div`);
    let h2 = document.createElement(`h2`);
    let p = document.createElement(`p`);
    let closeButton = document.createElement(`button`);

    // Add content to the modalCard:
    h2.textContent = `Modal Header`;
    p.textContent = `Modal content with information and such with flare and wonder.`
    closeButton.textContent = `Close`;
    modalCard.append(h2, p, closeButton);

    // Add an event listener to the closeButton:
    closeButton.addEventListener(`click`, () => {
        document.body.removeChild(modalContainer);
    });

    // Add modalCard to the modal and apply CSS features:
    modalContainer.id = `modal`;
    modalContainer.appendChild(modalCard);
    modalCard.classList.add(`modal-card`);

    // Add the modal to the Body:
    document.body.appendChild(modalContainer);
};

let button = document.querySelector(`#btn`);
button.addEventListener(`click`, show);

// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

