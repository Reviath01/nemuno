const settings = require('../settings.json');

module.exports = {

    ready : (client) => {

        client.login(settings.token);
        client.on('ready', async () => {
            await client.user.setActivity('-help , git.randomchars.net');
            await client.user.setStatus('online');
            console.log(`${client.user.tag} is ready!`);

        });
    }
};