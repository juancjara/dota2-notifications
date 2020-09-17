const d2gsi = require('dota2-gsi')

let server = null;

const log = (name: string) => (v: any) => console.log(name, v)

const start = () => {
  server = new d2gsi();
  server.events.on('newclient', function(client: any) {
    console.log("New client connection, IP address: " + client.ip);
    if (client.auth && client.auth.token) {
        console.log("Auth token: " + client.auth.token);
    } else {
        console.log("No Auth token");
    }

    client.on('map:daytime', log('daytime'));
    client.on('map:gamestate', log('gamestate'));
    client.on('map:clock_time', log('clock_time'));
    client.on('map:game_time', log('game_time'));
    client.on('player:steamid', log('Player:steamid'));

    client.on('player:activity', function(activity: String) {
        console.log('activy', activity)
        //if (activity == 'playing') console.log("Game started!");
    });
    client.on('hero:level', function(level: String) {
        console.log("Now level " + level);
    });
    client.on('abilities:ability0:can_cast', function(can_cast: Boolean) {
        console.log('can_cast', can_cast)
        //if (can_cast) console.log("Ability0 off cooldown!");
    });
});


export { start }
