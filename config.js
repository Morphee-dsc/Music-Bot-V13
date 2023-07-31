module.exports = {
    clients: {
        token: '',
        prefix: '!',
        activity: 'discord.gg/blackdev',
        name: 'Black-Dev by InspiDuSoir (ncv)',
        logo: 'https://cdn.discordapp.com/attachments/1125541715185516575/1135539465109110844/95793bf000e54f04afa93d6693ce8565.png',
        embedColor: 'Random'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Role-Name',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};