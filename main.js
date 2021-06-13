const {randomReddit} = require("./random-messages.js")

//Function to choose a random reddit comment
const randomChoose = () => {
    const randomNum = Math.floor(Math.random()*randomReddit.length);
    const randomMessage = randomReddit[randomNum];
    console.log(`One Reddit User Once Said: ${randomMessage}`);
};

console.log("Welcome to the No Context Random Reddit Comment Generator");
randomChoose();
