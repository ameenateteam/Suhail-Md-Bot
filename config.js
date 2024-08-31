const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2349136098207" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349136098207";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_45_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgNixcbiAgICAgICAgNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKNnl4TTNaZG50YzRleGVzQlBBZ0hyeG5xSzFSZ2lIeWhkVDdFVGlneCswPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzYwOTgyMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNBNEExRDAzMDBEMjAwQjdCOENGOEM0M0M0NkRGODA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTA0MzUwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUMExLNHAyMVNTMjR1NUxEV3p2eW1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2NDdiYjg4LTI2NjMtNGFjMC1hZTFlLTBlZWRmZGJkMmRiZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxNDIsXG4gICAgICAxMDgsXG4gICAgICAxNDYsXG4gICAgICAyMjQsXG4gICAgICAxNDksXG4gICAgICA2MyxcbiAgICAgIDMyLFxuICAgICAgMTQ3LFxuICAgICAgMTUyLFxuICAgICAgMTM1LFxuICAgICAgMjUwLFxuICAgICAgMTI1LFxuICAgICAgNjEsXG4gICAgICAyMzgsXG4gICAgICAxNzgsXG4gICAgICA5MCxcbiAgICAgIDIxMyxcbiAgICAgIDE5NCxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDI0OSxcbiAgICAgIDEyNSxcbiAgICAgIDE5MixcbiAgICAgIDgxLFxuICAgICAgNjAsXG4gICAgICAxMzAsXG4gICAgICAyMjUsXG4gICAgICAxMzQsXG4gICAgICA2MixcbiAgICAgIDE0MyxcbiAgICAgIDE0NCxcbiAgICAgIDE4MixcbiAgICAgIDE4NyxcbiAgICAgIDE5OSxcbiAgICAgIDYyLFxuICAgICAgMTQxLFxuICAgICAgMjM4LFxuICAgICAgMTMxLFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5WMlhBTE5NXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM2MDk4MjA3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTQ3Nzc5Mjk4MTQxNzk6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWpBeWFvSEVLaW15TFlHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnd1NSTEhjMFBBVnFiOHVzS2I4K3krQmNHNHNIdVZzcU01YTdjdG05Y0g0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIms2d1ZhZWJMd080R2ZnQ25RaWtEbDF1NWVocjdlY2Nhd1QrY1A0VkQxMHRPbDBuZXkyOFN3MjkvYk41ckhxL0FpMTFrZ0lyTU9sbWZNMElEMzlJYkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlF4a0FWZDUxR2Z4Si9nRnJhVG9Fbmx1RTl2UGZTL09DazJNRVpYczE4SWlaam02NHA2VzZOa1ZjNVVycitNYlFzazhYTEtPODMzb0psMTZDYlNiTUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzYwOTgyMDc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTA0MzQ5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtlOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2U4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiekNLYlNQdUc3TGJtai9jbDhlbm9JMVhGNjRIWFZVbi9veDBlaHBnc3lSQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTY4MzMyODcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjUwMjY0MjgwODdcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
