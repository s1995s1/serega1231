let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗INFO❗] INGRESA EL @tag DE ALGUN USUARIO*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗INFO❗] INGRESA EL @tag DE ALGUN USUARIO*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗INFO❗] EL CHAT FUE DESBANEADO CON ÉXITO*\n*—◉ EL USUARIO YA PUEDE USAR EL BOT*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
