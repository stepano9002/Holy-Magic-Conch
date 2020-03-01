const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
client.on("ready", () => {
  console.log(`i am ready!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
