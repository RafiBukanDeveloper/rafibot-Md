let handler = async (m, { conn, command, text }) => {

 try {
    if (!text) return conn.reply(m.chat, '• *Contoh :* .cekkhodam RAFI', m)
	let khodam = `
  *CHECK KHODAM*
  

> _Nama Pasien:_ *${text}*

> _khodam:_ *${pickRandom(['Curut Spbu', 'Naga Api', 'Raja Iblis', 'Laba laba Sunda', 'Curut kedelai', 'Sarden kaleng', 'Bakwan Jagung', 
        'Belalang api', 'Tokek betawi', 'Ambatron', 'Kodok Spbu', 'Macan Sawah', 'Naga Es', 'Cicak Spbu', 
        'Kalajengking', 'Kupu kupu Api', 'Kaleng Cat Avian', 'Pipa Rucika', 'Botol Tupperware', 'Badut Mixue', 
        'Sabun GIV', 'Sandal Swallow', 'Jarjit', 'Ijat', 'Fizi', 'Mail', 'Ehsan', 'Upin', 'Ipin', 'sungut lele', 
        'Tok Dalang', 'Opah', 'Opet', 'Alul', 'Pak Vinsen', 'Maman Resing', 'Pak RT', 'Admin ETI', 'Bung Towel', 
        'Lumpia Basah', 'Martabak Manis', 'Baso Tahu', 'Tahu Gejrot', 'Dimsum', 'Seblak Ceker', 'Telor Gulung', 
        'Tahu Aci', 'Tempe Mendoan', 'Nasi Kucing', 'Kue Cubit', 'Tahu Sumedang', 'Nasi Uduk', 'Wedang Ronde', 
        'Kerupuk Udang', 'Cilok', 'Cilung', 'Kue Sus', 'Jasuke', 'Seblak Makaroni', 'Sate Padang', 'Sayur Asem', 
        'Kromboloni', 'Marmut Pink', 'Belalang Mullet', 'Kucing Oren', 'Lintah Terbang', 'Singa Paddle Pop', 
        'Macan Cisewu', 'Vario Mber', 'Beat Mber', 'Supra Geter', 'Oli Samping', 'Knalpot Racing', 'Jus Stroberi', 
        'Jus Alpukat', 'Alpukat Kocok', 'Es Kopyor', 'Es Jeruk', 'Cappucino Cincau', 'Jasjus Melon', 'Teajus Apel', 
        'Pop ice Mangga', 'Teajus Gulabatu', 'Air Selokan', 'Air Kobokan', 'TV Tabung', 'Keran Air', 'Tutup Panci', 
        'Kotak Amal', 'Tutup Termos', 'Tutup Botol', 'Kresek Item', 'Kepala Casan', 'Ban Serep', 'Kursi Lipat', 
        'Kursi Goyang', 'Kulit Pisang', 'Warung Madura', 'Gorong-gorong'])}*`
await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  conn.reply(m.chat, khodam, m)
  } finally { 
   await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
}
handler.help = ['cekkhodam *<name>*']
handler.tags = ['fun']
handler.command = /^cekkhodam|cekkodam/i
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}