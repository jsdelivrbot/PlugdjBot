var PlugAPI = require('plugapi');

var bot = new PlugAPI({
    "email": "natzkiPlaysMinecraft@gmail.com",
    "password": "Minecraft-hg"
});
bot.connect('/mineplex'); // The part after https://plug.dj

bot.on('roomJoin', function(room) {
    console.log("Joined " + room);
});
