let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

•
🎩 *Propietario del bot:* 
💛 *Número:* Wa.me/2731590195

• 
🍭 *Rol* Developer
💛 *Numero:* +505 5786 5603

• 
🎩 *Rol:* Developer
💛 *Número:*

• 
🍭 *Rol:* Mod
💛 *Número:* 


• 
🍭 *Rol:* Mod
💛 *Numero:*

• 
🎩 *Rol:* Mod
💛 *Número:*

• 
🍭 *Rol:*  Developer
💛 *Número:*

•
🎩 *Rol:* Mod
💛 *Número:*

• 
🍭 *Rol:* Mod
💛 *Numero:*`
await conn.sendFile(m.chat, 'https://raw.githubusercontent.com/WillZek/Storage-CB/main/images/21396e078a24.jpg', 'brook.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🎩 STAFF OFICIAL🌟`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler