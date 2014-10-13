var PlugAPI = require('plugapi');

var bot = new PlugAPI({
    "email": "",
    "password": ""
});
bot.connect('mcorigins-network'); // The part after https://plug.dj

bot.on('roomJoin', function(room) {
    console.log("Joined " + room);
});
