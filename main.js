const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const config = require("./config.json");
client.on("ready", () => {
  console.log(`i am ready!`);
});

client.on("message", msg => {
  if (msg.content === "!주인님") {
    msg.reply("재선님 부르셨나요 ");
  }
});

client.on("message", msg => {
  if (msg.author === client.user) {
    return;
  }
  if (msg.content.indexOf(`${config.prefix}`) != -1) {
    msg.channel.send(msg.author.toString() + ":" + msg.content);

    imageNumber = Math.floor(Math.random() * 2) + 1;
    msg.channel.send({ files: ["./images/" + imageNumber + ".png"] });
  }
});
//토큰숨기기
client.login(process.env.DISCORD_TOKEN);
