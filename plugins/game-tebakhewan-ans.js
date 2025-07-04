import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m)  {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hhew/i.test(m.quoted.text) || /.*hhew/i.test(m.text))
        return !0
    this.tebakhewan = this.tebakhewan ? this.tebakhewan : {}
    if (!(id in this.tebakhewan))
        return this.reply(m.chat, 'Soal itu telah berakhir', m)
    if (m.quoted.id == this.tebakhewan[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakhewan[id][3])
            delete this.tebakhewan[id]
            return this.reply(m.chat, '*Yah Menyerah :( !*', m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakhewan[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.title.toLowerCase().trim()) {
            global.db.data.users[m.sender].money += this.tebakhewan[id][2]
            global.db.data.users[m.sender].exp += this.tebakhewan[id][2]
            global.db.data.users[m.sender].limit += 2
            m.reply(`
╔═══════════━──⪼
║ *Jawaban Kamu*
╠⪼ ${json.title}
║  Wah Ternyata Benar✅
╚═══════════━──⪼
╔═══════════━──⪼
║ *Selamat Kak*
║ _Kamu mendapatkan_
╠──────────────⪼
║ *Money*💰= +${this.tebakhewan[id][2]}
╠──────────────⪼
║ *Limit*💳= +2
╠──────────────⪼
║ *XP*🎗️= +${this.tebakhewan[id][2]}
╚═══════════━──⪼`)
            clearTimeout(this.tebakhewan[id][3])
            delete this.tebakhewan[id]
        } else if (similarity(m.text.toLowerCase(), json.title.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi Kak*`)
        else
            m.reply(`*Salah Atuh Kak!*`)
    }
    return !0
}
export default handler
