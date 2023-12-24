global.owner = ['6282257529886']  
global.mods = ['6282257529886'] 
global.prems = ['6282257529886']
global.nameowner = 'Dmss-Slbeww'
global.numberowner = '6282257529886' 
global.mail = 'freefiremax12d@gmail.com'
global.gc = 'https://chat.whatsapp.com/DXPU5F2cePXEaysvcImdUy'
global.instagram = 'https://instagram.com/felizmunzz'
global.wm = '© Dmss'
global.wait = 'sabar sedang di proses bg'
global.eror = 'Server Error'
global.stiker_wait = '*⫹⫺ Otw Buat Stiker  *'
global.packname = 'Sticker by'
global.author = 'Dmss-Slebww'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'cFpSZBwN' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'cFpSZBwN' 
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
