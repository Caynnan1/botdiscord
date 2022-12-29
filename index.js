const Discord = require("discord.js")
const client = new Discord.Client({ intents: [1, 512, 32768, 2, 128] })

/*aqui em baixo temos o evento ready, é quando o client(bot) consegue ligar. Pra isso usamos client.login
essa função é
quando meu client for ligado(){
    console.log(`Bot ligado!´) -- avisa se o evento foi de forma positiva concluido;
}
*/
client.on('ready', () => {
    console.log(`Bot Ligado`);
})


/*aqui a baixo temos o evento de quando uma mensagem é criada, no caso enviada*/
client.on('messageCreate', message => {
    if(message.content == '!ping'){ // aqui ele verifica se a mensagem contem !ping
        message.reply({content: `Pong!`}); //aqui ele vai responder a mensagem com pong caso a mensagem seja !ping
    }
})

client.login("TOKEN DO SEU BOT AQUI");