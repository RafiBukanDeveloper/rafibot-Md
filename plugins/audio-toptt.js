import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
 try {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `reply video/audio you want to convert to voice note/vn with caption *${usedPrefix + command}*`
    let media = await q.download?.()
    await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
    if (!media) throw 'Can\'t download media'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Can\'t convert media to audio'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
    conn.sendMessage(m.chat, { react: { text: '', key: m.key }})
} finally {
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i

export default handler