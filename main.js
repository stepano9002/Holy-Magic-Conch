const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
client.on("ready", () => {
  console.log(`i am ready!`);
});

client.on("message", msg => {
  if (msg.author === client.user) {
    return;
  }
  if (msg.content.indexOf(`${process.env.prefix}`) != -1) {
    msg.channel.send(msg.author.toString() + ":" + msg.content);

    imageNumber = Math.floor(Math.random() * 2) + 1;
    msg.channel.send({ files: ["./images/" + imageNumber + ".png"] });
  }
});

client.login(process.env.DISCORD_TOKEN);
