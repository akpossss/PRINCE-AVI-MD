//AVISHKA SHAVINDA

import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/alive.mp3';
  const chat = global.db.data.chats[m.chat];
  if (/^bot|.bot|.menu|menu|.alive|alive$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
   
    await m.reply(`*කොහොමද යාලුවා?*`);
    conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true}, {quoted: m});
   
  }
  return !0;
};
export default handler;
