import "../a_ubahdisini_ngab.js";
let handler = async (m, {conn, args, usedPrefix, command}) => {
        
        const selected = args[0]?.toLowerCase();
  if (!['button', 'nobutton'].includes(selected)) {
    return m.reply(`*Penggunaan :*\n.setmenu button\n.setmenu nobutton`);
  }

  global.menuMode = selected; // Ubah global, bukan per user
  return m.reply(`✅ Tampilan menu semua user telah diubah ke *${selected.toUpperCase()}* mode.`);
}
handler.help = handler.command = ['setmenu']
handler.tags = ['owner']
handler.owner = true
export default handler