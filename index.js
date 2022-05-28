require("dotenv").config();
const AltAlertBot = require("./AltAlertBot.js");
const config = require("./config.js");

config.botAccounts.forEach((bot) => {
  bot.botInstance = new AltAlertBot(
    bot.screenName,
    config.consumerKey,
    config.consumerSecret,
    bot.accessTokenKey,
    bot.accessTokenSecret,
    bot.infoUrl
  );

  console.log(`Created bot ${bot.screenName}`);
});
