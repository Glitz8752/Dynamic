const { Collection, MessageEmbed, Client, Intents } = require('discord.js');
const mongoose = require("mongoose");

class Erica extends Client {
    constructor(intents) {
    super(intents);
    
    this.commands = new Collection;
    this.slashCommands = new Collection;
    this.config = require("../config");
    this.prefix = this.config.Bot.BotPrefix;
    mongoose.connect(this.config.Mongoose, {
      useUnifiedTopology : true,
      useNewUrlParser : true,
      //useFindAndModify: false,
    }).then(() => {
      console.log(`Connected to Mongoose Data Base.`)
    })
}

start(token) {
if(!token) return console.error(`You Need To Add Your Bot Token To Run The Bot.`)
    this.login(token);
}
}

module.exports = Erica;