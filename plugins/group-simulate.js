let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
    if (!event) return await conn.reply(m.chat, `Contoh:

${usedPrefix + command} welcome @user
${usedPrefix + command} bye @user`.trim(), m)
    let mentions = text.replace(event, '').trimStart()
    let who = mentions ? conn.parseMention(mentions) : []
    let part = who.length ? who : [m.sender]
    let act = false
    try {
    await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
    switch (event.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
            act = 'add'
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
            act = 'remove'
            break
/*        case 'promote':
            act = 'promote'
            break
        case 'demote':
            act = 'demote'
            break
        case 'delete':
            deleted = m
            break
*/
        default:
            throw eror
    }
    if (act) return conn.participantsUpdate({
        id: m.chat,
        participants: part,
        action: act
    })
//    return conn.onDelete(m)
} finally {
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ['simulate <event> [@mention]']
handler.tags = ['group']
handler.command = /^simulate$/i
handler.admin = true
handler.group = true
export default handler