const emoji = document.querySelector("#emoji");
const emojis = [
"❤️",
"😂",
"🤣",
"👍",
"💕 love u",
"😁",
"👿",
"🥱",
"😭",
"🙁",
"🥵",
"🥶",
"😡",
"😍",
"🤮",
"😎"
];

emoji.addEventListener("mouseover", ()=>{
    emoji.innerHTML = emojis[Math.floor(Math.random()* emojis.length)];
    console.log(emoji);
    
})
