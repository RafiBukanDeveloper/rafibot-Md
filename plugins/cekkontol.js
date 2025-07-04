let handler = async (m, { conn, command, text }) => {
 try {
    if (!text) return conn.reply(m.chat, `•*CONTOH:* .cekkontol ${global.setting.namaowner}`, m)
	let kontol = `
	*CEK KONTOL*


> _Nama Pasien:_ *${text}*

> _Kontolnya:_ *${pickRandom(['Putih mulus','Putih','Hitam','berjemur','dekil','hitam berkarat'])}*

> _Jembutnya:_ *${pickRandom(['Lebat','Tipis','Gada Jembut', 'Bersih'])}*

> _Statusnya:_ *${pickRandom(['perjaka','Ga perjaka','Besar','Panjang','Disunat','Blom Disunat'])}*`
await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
conn.reply(m.chat, kontol, m)
              } finally { 
              await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ['cekkontol *<name>*']
handler.tags = ['fun']
handler.command = /^cekkontol|cekkntl/i
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}