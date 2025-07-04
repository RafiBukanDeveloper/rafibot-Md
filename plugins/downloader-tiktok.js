import axios from 'axios';

let handler = async (m, { conn, args }) => {
  if (!args[0]) return m.reply('Mana Link Tiktok Nya')
  
  let url = args[0];
  if (!url.match(/tiktok\.com/)) return m.reply('Link Mya Yang Valid Lah')
  
  try {
      await conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
    let { data } = await axios.post('https://downloader.bot/api/tiktok/info', 
      { url },
      { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
    );
    
    let result = data.data;   
    await conn.sendMessage(m.chat, { 
      video: { url: result.mp4 },
      caption: ''
    }, {quoted: m});

    await conn.sendMessage(m.chat, 
{ audio: {url: result.mp3},
 ptt: true
 })
    
  } catch (e) {
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
    m.reply(`${e.message}`);
  } finally {
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})}
};

handler.help = ['tiktok => (url)'];
handler.command = ['tiktok','tt','ttd','rafi-tt'];
handler.tags = ['downloader'];

export default handler;