var bot = new PlugAPI({
    "email": "",
    "password": ""
});
bot.connect('/mineplex-official'); // The part after https://plug.dj

bot.on('roomJoin', function(room) {
    console.log("Joined " + room);
});
