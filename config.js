
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6288214989352']  
global.mods = ['6288214989352'] 
global.prems = ['6288214989352']
global.nameowner = 'Ilhammm'
global.numberowner = '6288214989352' 
global.mail = 'zxynnbotz@gmail.com' 
global.dana = '6288214989352'
global.pulsa = '6281395861695'
global.gopay = '6281395861695'
global.namebot = 'ZxynnBoTz-MD'
global.gc = 'https://chat.whatsapp.com/FMgp91EgeQC7CIOAf9VZJl'
global.web = 'https://github.com/BOTCAHX'
global.instagram = 'https://instagram.com/hamzz_jr'
global.wm = 'ZxynnBoTz-MD'
global.watermark = wm
global.wm2 = '⫹⫺ ZxynnBoTz-MD'
global.wm3 = '© Ilhammm'
global.wm4 = 'made by ZxynnBoTz-MD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'ZxynnBoTz-MD'
global.author = 'By IlhamGantengg'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg'

//===> Apikey
global.lann = 'Your_Key_Here' //isi apikey mu https://api.betabotz.org
global.btc = 'Your_Key_Here'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'Your_Key' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
