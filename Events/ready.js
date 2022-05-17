const Discord = require('discord.js');
const chalk = require("chalk");
module.exports = async (client) =>{

    client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "/help",
                type: "LISTENING"
            }
        ]
    });
    console.log(`[API] Successfully Logged In As ${client.user.tag}`)
}