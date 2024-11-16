const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923418437337,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_15_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgODYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA3NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4LFxuICAgICAgICA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICA4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoeEd0cld6OTV3ZjBKdjJseTl4SWlXZEpEdGMwdlV5Tm92a3BxeHdSTzlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5dDFpLXUwbVNveVIyOFU2clRVc0l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg0NDFiODQ1LTc5NzEtNDc0NS05NjVhLWJjMzJkNzkzMDg2ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDE3MSxcbiAgICAgIDE5OCxcbiAgICAgIDEwOSxcbiAgICAgIDEyNCxcbiAgICAgIDEyNyxcbiAgICAgIDE5MCxcbiAgICAgIDEyOCxcbiAgICAgIDIwMCxcbiAgICAgIDE1MyxcbiAgICAgIDEzNyxcbiAgICAgIDE2NixcbiAgICAgIDUyLFxuICAgICAgMjUwLFxuICAgICAgMTUyLFxuICAgICAgNjgsXG4gICAgICAzMyxcbiAgICAgIDExNSxcbiAgICAgIDI1MSxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAxMjksXG4gICAgICAxNjYsXG4gICAgICAxMTQsXG4gICAgICA5NSxcbiAgICAgIDE4OCxcbiAgICAgIDE1OSxcbiAgICAgIDkyLFxuICAgICAgMjUxLFxuICAgICAgMTUxLFxuICAgICAgMzAsXG4gICAgICA3MixcbiAgICAgIDIyMCxcbiAgICAgIDY4LFxuICAgICAgNDYsXG4gICAgICAxLFxuICAgICAgMTI0LFxuICAgICAgMTc3LFxuICAgICAgMjI5LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQSDR1TDhFRUphTjRia0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjUrZDBhdVVsZUR4WDdCd1V3OHRCS2tOcjFwTmpveGNPbllQbWZ1Ti9helk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid3pML1ZvUktRV21yNFd3Zm0rQVQ3NWs0TFNCMUdhYjRKM2dHNTEyaWZpclkyMk4zbzdqeTlJVTVVa0IzK3B2MUlzdTdGT1dHVlkya0hpdDZEMmJwQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicW15VXJIekdocGJ3b0pRc3hEOEZzL0ZndmZQZUNtMzNpbG44b01ZWFdLS2lZcUhrSU81YThVSWpkRzZPcUw2ZXJIaEEya3RVS01YOEJtRVo4djVoQ3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTg0MzczMzc6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLdWlja2VlIFBLXCIsXG4gICAgXCJsaWRcIjogXCIyMjU2NDQ3ODA3NzM0NTQ6MzhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTg0MzczMzc6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3NDEzMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFUklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVSSC5qc29uIjogIntcImtleURhdGFcIjpcInp3T1dOdEN6c0M0QXpDaGhiZHB6MzBtQlRLZkdvV2s3S2dIclV1bituNEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwNjc5NTM3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVJJLmpzb24iOiAie1wia2V5RGF0YVwiOlwibFlqNzM2Zi9IR2tnbHltZnpoZUI0QmJVYWE2anBPdEVJUXc4MGgzcC9WND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjA2Nzk1Mzc3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMTc0MTMyODg4OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ syedzada 』```", //"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nu8Shell",
  ownername:process.env.OWNER_NAME|| "SHEHANSHAH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
