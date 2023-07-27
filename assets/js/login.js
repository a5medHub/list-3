const fighters = [
    "🐉",
    "🐥",
    "🐊",
    "💩",
    "🦍",
    "🐢",
    "🐩",
    "🦭",
    "🦀",
    "🐝",
    "🤖",
    "🐘",
    "🐸",
    "🕷",
    "🐆",
    "🦕",
    "🦁",
  ]
let stageEl = document.getElementById("stage")
let fightButtonEl = document.getElementById("fightButton")
let logOutBtn = document.getElementById("logOut")
document.title=("Emoji")
logOutBtn.addEventListener("click", function(){
    window.location.replace("index.html")
})
fightButtonEl.addEventListener("click", function(){
    let char01 =  Math.floor(Math.random(fighters)*fighters.length)
    let char02 =  Math.floor(Math.random(fighters)*fighters.length)
    let diff = 0
    stageEl.innerHTML = `${fighters[char01]} VS ${fighters[char02]}`
    if(fighters[3] == fighters[char01] || fighters[3] == fighters[char02]){
      stageEl.innerHTML += `<br> ${fighters[3]} is the winner`
    }else{
      if(char01 > char02){
        diff = char01 - char02
        stageEl.innerHTML += `<br> ${fighters[char01]} win by ${diff} points`
        if(diff>9){
          fightButtonEl.style.backgroundColor="#ff5"
        }else{
          fightButtonEl.style.backgroundColor="#fff"
        }
      }else if(char01 < char02){
        diff = char02 - char01
        stageEl.innerHTML += `<br> ${fighters[char02]} win by ${diff} points`
        if(diff>9){
          fightButtonEl.style.backgroundColor="#ff5"
        }else{
          fightButtonEl.style.backgroundColor="#fff"
        }
      }else{
        stageEl.innerHTML += `<br> Tie Game`
        fightButtonEl.style.backgroundColor="#f0f"
      }
    }
})