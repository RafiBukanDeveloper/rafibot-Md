let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    let user = global.db.data.users[who]
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')
    let limit = user.premiumTime >= 1 ? 'Unlimited' : user.limit
    let tekss = `
   *LIMIT KAMU*
> *Username:* \`${user.registered ? user.name : conn.getName(who)}\`
> *Status:* \`${who.split`@`[0] == setting.owner ? 'Developer' : user.premiumTime >= 1 ? 'Premium User' : user.level >= 1000 ? 'Elite User' : 'Free User'}\`
> *Limit:* \`${limit}\`
> *Developer By:* \`@${global.nodev}\``
    conn.sendMessage(m.chat, {
      image: { url: pp },
      caption: tekss.trim()
    }, { quoted: m })
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler 