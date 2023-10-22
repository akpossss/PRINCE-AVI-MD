import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    //let vn = './media/alive.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `  ━━━━━━✯✯✯━━━━━
   ₳ — *PRINCE AVI MD* — ₳
━━━━━━━━━━━━━━
║➤ *𝗛I, ${taguser}*
┗━━━━━━━━━━━━━━

║➤ *Owner:* AVISHKA SHAVINDA

┗━━━━━━━━━━━━━━
║➤ DOWNLOAD MENU
━━━━━━━━━━━━━━
.sticker
.song
.video
.fb
.apk
━━━━━━━━━━━━━━
║➤ ANIME MENU
━━━━━━━━━━━━━━

akira
akiyama
anna
asuna
ayuzawa
boruto
chiho
chitoge
deidara
erza
elaina
eba
emilia
hestia
hinata
inori
isuzu
itachi
itori
kaga
kagura
kaori
keneki
kotori
kurumi
madara
mikasa
miku
minato
naruto
nezuko
sagiri
sasuke
sakura
cosplay

━━━━━━━━━━━━━━
║➤ LOGO
━━━━━━━━━━━━━━

🗡 logo 3d-deep-sea-metal
🗡 logo American-flag-3D
🗡 logo 3D-sci-fi
🗡 logo 3D-rainbow-color-calligraphy
🗡 logo 3D-water-pipe
🗡 logo Halloween-skeleton
🗡 logo a-spooky-Halloween
🗡 logo a-cinematic-horror
🗡 logo a-sketch
🗡 logo blue-circuit-style
🗡 logo space
🗡 logo a-metallic
🗡 logo Creat-glossy-metalic
🗡 logo a-Captain-America
🗡 logo science-fiction
🗡 logo Video-game-classic-8-bit
🗡 logo green-horror-style
🗡 logo a-transformer
🗡 logo berry
🗡 logo layered
🗡 logo Online-thunder--generator
🗡 logo a-magma-hot
🗡 logo 3D-stone-cracked-cool
🗡 logo 3D-neon-light
🗡 logo impressive-glitch
🗡 logo a-glitch
🗡 logo embossed--on-cracked-surface
🗡 logo Broken-glass
🗡 logo art-paper-cut
🗡 logo artistic-black-and-white-status-and-quote-with-your-photos
🗡 logo Online-3D-gradient--generator
🗡 logo a-3D-glossy-metal
🗡 logo 3D-realistic--on-the-beach
🗡 logo a-watercolor
🗡 logo Online-multicolor-3D-paper-cut
🗡 logo Write-text-on-foggy-window
🗡 logo neon-devil-wings
🗡 logo 3D-underwater--generator
🗡 logo Online-black-and-white-bear-mascot-logo-creation
🗡 logo wonderful-graffiti-art
🗡 logo a-cool-graffiti-text-on-the-wall
🗡 logo cool-wall-graffiti
🗡 logo a-christmas-holiday-snow
🗡 logo a-futuristic-technology-neon-light
🗡 logo snow--for-winter-holidays
🗡 logo a-cloud--on-the-sky
🗡 logo 3D-luxury-gold
🗡 logo 3D-gradient
🗡 logo Blackpink-logo-style
🗡 logo realistic-vintage-style-light-bulb
🗡 logo realistic-cloud
🗡 logo a-cloud--in-the-sky
🗡 logo Write-in-Sand-Summer-Beach
🗡 logo Sand-Writing
🗡 logo Sand-engraved-3d
🗡 logo a-summery-sand-writing
🗡 logo Foil-Balloon--For-Birthday
🗡 logo 3d-glue--with-realistic-style
🗡 logo space-3D
🗡 logo Metal-Dark-Gold
🗡 logo Glitch--Style-Tik-Tok
🗡 logo a-Stone
🗡 logo Neon-Light--With-Galaxy-Style
🗡 logo 1917-Style
🗡 logo 80's-Retro-Neon
🗡 logo Minion--3D
🗡 logo Pornhub-Style-Logo
🗡 logo Double-Exposure--Black-&-White
🗡 logo Holographic-3D
🗡 logo 3D-Avengers-logo
🗡 logo Metal-Purple-Dual-Effect
🗡 logo logo-style-Marvel-studios-Ver:-metal
🗡 logo logo-style-Marvel-studios
🗡 logo Deluxe-Silver
🗡 logo Color-Full-Luxury-Metal
🗡 logo Glossy-Blue-Metal
🗡 logo Deluxe-Gold
🗡 logo Glossy-Carbon
🗡 logo Fabric
🗡 logo Neon
🗡 logo New-Year-Cards-3D-By-Name
🗡 logo Happ-new-year-card-firework-gif
🗡 logo Fullcolor-Balloon
🗡 logo Text-Logo-3D-Metal
🗡 logo avatar-gold
🗡 logo Text-Logo-3D-Metal-Silver
🗡 logo Text-Logo-3D-Metal-Rose-Gold
🗡 logo Text-Logo-3D-Metal-Gold
🗡 logo Text-Logo-3D-Metal-Galaxy
🗡 logo Xmas-Cards-3D
🗡 logo Blood-Text-On-The-Frosted-Glass
🗡 logo Halloween-Fire
🗡 logo Metal-Dark-Gold
🗡 logo Lion-Logo-Mascot
🗡 logo Wolf-Logo-Black-&-White
🗡 logo Wolf-Logo-Galaxy
🗡 logo Ninja-Logo
🗡 logo Logo-Joker
🗡 logo Wicker
🗡 logo Natural-Leaves
🗡 logo Firework-Sparkle
🗡 logo Skeleton
🗡 logo Red-Foil-Balloon
🗡 logo Purple-Foil-Balloon
🗡 logo Pink-Foil-Balloon
🗡 logo Green-Foil-Balloon
🗡 logo Cyan-Foil-Balloon
🗡 logo Blue-Foil-Balloon
🗡 logo Gold-Foil-Balloon
🗡 logo Steel
🗡 logo Ultra-Gloss
🗡 logo Denim
🗡 logo Decorate-Green
🗡 logo Decorate-Purple
🗡 logo Peridot-Stone
🗡 logo Rock
🗡 logo Lava
🗡 logo Yellow-Glass
🗡 logo Purple-Glass
🗡 logo Orange-Glass
🗡 logo Green-Glass
🗡 logo Cyan-Glass
🗡 logo Blue-Glass
🗡 logo Red-Glass
🗡 logo Purple-Shiny-Glass
🗡 logo Captain-America
🗡 logo Robot-R2-D2
🗡 logo Rainbow-Equalizer
🗡 logo Toxic
🗡 logo Pink-Sparkling-Jewelry
🗡 logo Blue-Sparkling-Jewelry
🗡 logo Green-Sparkling-Jewelry
🗡 logo Purple-Sparkling-Jewelry
🗡 logo Gold-Sparkling-Jewelry
🗡 logo Red-Sparkling-Jewelry
🗡 logo Cyan-Sparkling-Jewelry
🗡 logo Purple-Glass
🗡 logo Decorative-Glass
🗡 logo Chocolate-Cake
🗡 logo Strawberry
🗡 logo Koi-Fish
🗡 logo Bread
🗡 logo Matrix-Style
🗡 logo Horror-Blood
🗡 logo Neon-Light
🗡 logo Thunder
🗡 logo 3D-Box
🗡 logo Neon
🗡 logo Road-Warning
🗡 logo 3D-Steel
🗡 logo Bokeh
🗡 logo Green-Neon
🗡 logo Free-Advanced-Glow
🗡 logo Dropwater
🗡 logo Break-Wall
🗡 logo Chrismast-Gift
🗡 logo Honey
🗡 logo Plastic-Bag-Drug
🗡 logo Horror-Gift
🗡 logo Marble-Slabs
🗡 logo Marble
🗡 logo Ice-Cold
🗡 logo Fruit-Juice
🗡 logo Rusty-Metal
🗡 logo Abstra-Gold
🗡 logo Biscuit
🗡 logo Bagel
🗡 logo Wood
🗡 logo SCI---Fi
🗡 logo Metal-Rainbow
🗡 logo Purple-Gem
🗡 logo Shiny-Metal
🗡 logo Yellow-Jewelry
🗡 logo Silver-Jewelry
🗡 logo Red-Jewelry
🗡 logo Purple-Jewelry
🗡 logo Orange-Jewelry
🗡 logo Green-Jewelry
🗡 logo Cyan-Jewelry
🗡 logo Blue-Jewelry
🗡 logo Hot-Metal
🗡 logo Hexa-Golden
🗡 logo Blue-Glitter
🗡 logo Purple-Glitter
🗡 logo Pink-Glitter
🗡 logo Green-Glitter
🗡 logo Silver-Glitter
🗡 logo Gold-Glitter
🗡 logo Bronze-Glitter
🗡 logo Eroded-Metal
🗡 logo Carbon
🗡 logo Pink-Candy
🗡 logo Blue-Metal
🗡 logo Blue-Gem
🗡 logo Black-Metal
🗡 logo 3D-Glowing-Metal
🗡 logo 3D-Chrome


OTHER COMMAND COMMING SOON
┗━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*avi*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
