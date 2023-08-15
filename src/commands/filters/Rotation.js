const AvonCommand = require("../../structures/avonCommand");
const { EmbedBuilder } = require(`discord.js`);
class Rotation extends AvonCommand{
    get name(){
        return 'rotation'
    }
    get aliases(){
        return null;
    }
    get inVoice(){
        return true;
    }
    get sameVoice(){
        return true;
    }
    get cat(){
        return 'filters'
    }
    get vote(){
        return false;
    }
    get player(){
        return true;
    }
    async run(client,message,args,prefix,player){
        player.filters.setRotation(!player.filters.rotation);
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `| ${player.filters.rotation ? `Enabled` : `Disabled`} Rotation mode of the player`,iconURL : message.author.displayAvatarURL({dynamic : true})})]})
    }
}
module.exports = Rotation;