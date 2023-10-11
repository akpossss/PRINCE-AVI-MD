import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `━━━━━━━━━━━━━━
 *EXAMPLE*;
 ━━━━━━━━━━━━━━
 .*apk free fire.*
 ━━━━━━━━━━━━━━`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 *AVI NET HUNTER* 📲\n\n📌 *Name:* ${data5.name}\n📦 *Package:* ${data5.package}\n🕒 *last update:* ${data5.lastup}\n📥 *Tamaño:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[⛔].*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] Error*`;
  }    
};
handler.command = /^(apk|modapk|dapk2|app|apks)$/i;
export default handler;
