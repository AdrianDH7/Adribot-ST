let handler = async (m, { conn, command, usedPrefix }) => {
let img = 'https://raw.githubusercontent.com/WillZek/Storage-CB/main/images/21396e078a24.jpg''
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✦ *Bot:* ${botname}

❍ *Creador:*

> 🜸 Rol » *Creador*
> ✧

❒ *Colaboradores:*

> 🜸 Rol » *Developer*
> ✧

> 🜸 Rol » *Developer*
> ✧

> 🜸 Rol » *Developer*
> ✧ 

> 🜸 Rol »
> ✧
`
await conn.sendFile(m.chat, img, staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler