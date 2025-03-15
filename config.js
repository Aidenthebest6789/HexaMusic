

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1180993418479013928", ""], 
  mongodbUri : "mongodb+srv://89hostingservice1:HexaMusic@hexamusic.yytf6.mongodb.net/?retryWrites=true&w=majority&appName=HexaMusic",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: " https://discord.gg/qAE9FaPTwu", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/qAE9FaPTwu",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
      {
      name: "HexaMusic",
   "password": "HexaBot",
   "host": "104.167.222.158",
   "port": 10192,
   "secure": false
    }
  ]
}
