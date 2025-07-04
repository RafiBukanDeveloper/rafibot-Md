let handler = async (m, { conn, command, text }) => {
 try {
    if (!text) return conn.reply(m.chat, '• *Contoh :* .cekmemek ica', m)
	let memek = `
	*CEK MEMEK*
	

> _Nama Pasien:_ *${text}*

> _Memeknya:_ *${pickRandom(['Putih mulus','Hitam','Pink','Pink Mulus','Hitam mulus','berjemur'])}*

> _Jembutnya:_ *${pickRandom(['Lebat','Tipis','Gada Jembut', 'Bersih'])}*

> _Lobangnya:_ *${pickRandom(['Perawan','Ga Perawan','Besar','Sempit'])}*
`
await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
conn.reply(m.chat, memek, m)
              } finally { 
              await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ['cekmemek *<name>*']
handler.tags = ['fun']
handler.command = /^cekmemek|cekmmk/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}