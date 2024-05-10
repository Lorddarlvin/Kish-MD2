const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['254105677636']
global.ownername = "𝚳𝚫𝚻𝚪𝚰𝚾🦋𝐂𝚯𝐃𝚵𝚪𓅓"//owner name
global.ytname = "YT: 𝚳𝚫𝚻𝚪𝚰𝚾Botz.inc"
global.socialm = "GitHub: 𝚳𝚫𝚻𝚪𝚰𝚾-AI"
global.location = "Kenya"

global.botname = '𝚳𝚫𝚻𝚪𝚰𝚾-AI' //name of the bot

//sticker details
global.stickername = '𝚳𝚫𝚻𝚪𝚰𝚾-AI'
global.packname = 'Sticker By'
global.author = '𝚳𝚫𝚻𝚪𝚰𝚾 Bot'
//console view/theme
global.themeemoji = '𓅃'
global.wm = "𝚳𝚫𝚻𝚪𝚰𝚾 botz inc."

//theme link
//global.link = 'https://chat.whatsapp.com/LhBwWwQAS4y93XOsCKpxdv'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Kish Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/MatrixCorder11464/MATRIX-AI \n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
