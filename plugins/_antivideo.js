export async function before(m, { isAdmin, isBotAdmin, RafiButtonTeks, conn }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isVideo = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiVideo && isVideo) {
    if(isVideo === "videoMessage"){
        if (isAdmin) return RafiButtonTeks("[ ❗ ] Terdeteksi Admin Kirim Video\n\nPeraturan Group Gak Berlaku Sama Admin Ya Guys")
        if (isBotAdmin) {
          RafiButtonTeks(`*Video Terdeteksi*\n\nMaaf Kak, Pesan kamu Harus Bot Hapus\n Karna Admin/Owner Mengaktifkan Anti video Untuk Group Ini.`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } return true
    }
  }
  return true
}