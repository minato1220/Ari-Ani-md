//═══════[© 2022 nexusNw Inc.]════════\\

//
//
//                      𝙰𝚜𝚝𝚊 𝚋𝚢 𝚗𝚎𝚡𝚞𝚜𝚗𝚠
//
//                     𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝
//

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapis.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': 'd6295ca53e', //Change This API KEY 
}

//═══════[modification]════════\\
global.owner = ['917863912273'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['917863912273'] //another owner number
global.premium = ['917863912273'] //premium number
global.pengguna = 'Nexus' //username
global.botnma = 'Ari Ani' //bot name
global.ownernma = '👻Ari' //owner name
global.packname = 'Ani' //sticker package name
global.author = 'By minato' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 28684 //free user limit
}
global.thumb = fs.readFileSync('./Media/astapic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
