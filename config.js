module.exports = {
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  botAccounts: [
    {
      screenName: process.env.SCREEN_NAME,
      accessTokenKey: process.env.ACCESS_TOKEN_KEY,
      accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
      infoUrl: "https://help.twitter.com/en/using-twitter/picture-descriptions",
    },
  ],
};
