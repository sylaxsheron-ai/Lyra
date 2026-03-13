const login = require("fca-project-orion");
const fs = require("fs");

// This loads your Facebook Key
const appState = JSON.parse(fs.readFileSync('appstate.json', 'utf8'));

login({appState}, (err, api) => {
    if(err) return console.error("Login failed! Check your appstate.json");

    console.log("Lyra Bot is online for Mr.X!");

    api.listenMqtt((err, message) => {
        if(err) return console.error(err);

        // If someone types 'Hi'
        if (message.body && message.body.toLowerCase() === "hi") {
            api.sendMessage("Hello! I am Lyra, Mr.X's private bot.", message.threadID);
        }
    });
});
