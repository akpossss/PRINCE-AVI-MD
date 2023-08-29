//AVISHKA SHAVINDA

import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/alive.mp3';
  const chat = global.db.data.chats[m.chat];

  if (/^.bot|alive|bot|.alive|menu|.menu$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    // conn.sendButton(m.chat, '', wm, [['𝙼𝙴𝙽𝚄 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂', `#menu`]], 'conversation', { sendEphemeral: true, quoted: m })
    await m.reply(`  *━━━━━━━━━━━━━━*
    *🗡PRINCE-AVI-MD🗡*
    *━━━━━━━━━━━━━━*
    ║➤ WHATSAPP USER BOT 
    CREATED BY 
    
    ║➤ *AVISHKA SHAVINDA*
   *━━━━━━━━━━━━━━*
`);
    conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true}, {quoted: m});

  }
  return !0;
};
export default handler;
