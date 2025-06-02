let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

• ADRIDH
🎩 *Rol:* CREADOR
💛 *Número:* Wa.me/5215646069199

await conn.sendFile(m.chat, 'https://files.catbox.moe/h094yg.jpg', 'brook.jpg', staff.trim(), fkontak, true, {
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
thumbnailUrl: icons }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler
