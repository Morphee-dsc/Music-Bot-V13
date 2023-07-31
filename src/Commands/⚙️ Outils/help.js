const { EmbedBuilder, Client, IntentsBitField } = require("discord.js")
const bot = new Client({ intents: new IntentsBitField(3276799) });
const nombot = 'BlackDev'
exports.help = {
    name: 'help'
}

exports.run = async (bot, message) => {
    const Embed = new EmbedBuilder()
        .setColor(bot.config.clients.embedColor)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo })

    message.delete().then(() => {
        message.channel.send({
            embeds: [
                Embed
                .setTitle(`Page d\'aide de ${nombot}`)
                .setDescription(`Mon préfix est : \`${bot.config.clients.prefix}\`\nNombres de commandes : \`13\`\n\n\`${bot.config.clients.prefix}help\` : Permet de voir les commandes Disponible du bot\n\`${bot.config.clients.prefix}ping\` : Permet de vérifier la latence du bot\n\`${bot.config.clients.prefix}back\` : Remet la musique précédente\n\`${bot.config.clients.prefix}clear\`: Enlève toute les musiques de la queue\n\`${bot.config.clients.prefix}jump\` : Saute une musique de la queue\n\`${bot.config.clients.prefix}nowplaying\` : Joue maintenant une nouvelle musique\n\`${bot.config.clients.prefix}pause\`: Met en pause une musique\n\`${bot.config.clients.prefix}play\` : Joue une musique\n\`${bot.config.clients.prefix}resume\` : Enlève une musique de la pause\n\`${bot.config.clients.prefix}shuffle\` : Mélange votre file d'attente\n\`${bot.config.clients.prefix}skip\` : Skip une musique\n\`${bot.config.clients.prefix}stop\` : Arrête la musique\n\`${bot.config.clients.prefix}volume\` : Permet de réglé le volume de la musique\n\n[\`Inviter Le Bot\`](https://discord.com/oauth2/authorize?client_id=1113548391478210580&scope=bot&permissions=24) | [\`Rejoindre le serveur Support\`](https://discord.gg/ZCEbzC59Vc)`)
            ]
        })
    })}