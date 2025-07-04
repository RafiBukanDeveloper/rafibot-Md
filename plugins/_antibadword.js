let badwordRegex = /anjing|anj|babi|asu|memek|pepek|colmek|coli|ngentot|ngocok|kontol|unggeh|asyu|mmk|kntol|entod|pantek|ptk/i
export async function before(m, { conn, isBotAdmin, isAdmin }) {
    if (m.isBaileys && m.fromMe) return
    if (m.isGroup) return
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    let toxic = `${user.warning >= 4 ? `*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!* ${isBotAdmin ? ' ': '*_Tapi Bot Bukan Admin_*'}` : '*📮 Kata Kata Toxic Terdeteksi*'}

${global.setting.namabot} Memberi Peringatan: ${user.warn} / 5

[❗] Jika *${global.setting.namabot}* sudah memperingatkanmu sebanyak 5x. Kamu akan dikeluarkan dari group ini.

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`
    if (isBadword) {
    if (isAdmin) return m.reply('[❗] *Terdeteksi* Admin Berkata Badword, Admin Bebas Ya Guys')
    if (chat.antiBadword) {
        user.warn += 1
        conn.sendMessage(m.chat, {
            text: toxic,
            footer: 'Jangan Di Ulangi Lagi Yah',
            buttons: [
                  {
                    buttonId: `.maaf`, 
                    buttonText: {
                    displayText: 'Maaf Minnn'
                  },
                    type: 1 
                  }
                      ],
            headerType: 6,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: setting.idch,
                   serverMessageId: null,
                   newsletterName: setting.namach,
                   },
                   externalAdReply: {
                   title: `KATA BADWORD TERDETEKSI`,
                   body: ``,
                   thumbnailUrl: global.setting.tampilan,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: false
                   },
                },
                    viewOnce: true
                     }, { quoted: m })
        if (user.warn >= 5) {
            user.warn = 0
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    }
    return !0
}