import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ ХУЛИГАН ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '*_ЭТО ОФИЦИАЛЬНОЕ ЗАЯВЛЕНИЕ_*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 владелец 🤖', '.owner'],['💎 ДОНАТ 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ОФИЦИАЛЬНОЕ СООБЩЕНИЕ ДЛЯ ВСЕХ ЧАТОВ',
body: 'АВТОР 🌎ХУЛИГАН🌏', 
sourceUrl: `https://chat.whatsapp.com/CxDc8NiUfYL6XUVgWX4HAb`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗INFO❗] СООБЩЕНИЕ ОТПРАВЛЕНО ВО ВСЕ ЧАТЫ*\n\n*ПРИМЕЧАНИЕ: ВОЗМОЖНО, В ЭТОЙ КОМАНДЕ ЕСТЬ СБОИ, И Я НЕ ЗНАЮ, ОТПРАВЛЯЛ ЛИ Я ВО ВСЕ ЧАТЫ, ИЗВИНИТЕ НА ДАННЫЙ МОМЕНТ*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
