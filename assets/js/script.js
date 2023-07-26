
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
document.title = ("LogIn Page")

loginBtn.addEventListener("click", function(){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value
    // console.log(accessUser, accessPass)
    if (accessUser == "admin01" && accessPass =="123"){
        // console.log(`welcome ${accessUser}`)
        welcome(accessUser)
    }
})
function welcome(greeting){
    console.log(`welcome ${greeting}`)
}