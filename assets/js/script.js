const accounts = [['admin01','123'],['admin02','234'],['admin03','345']]
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
document.title = ("LogIn Page")

loginBtn.addEventListener("click", function(){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value
    let found = false
    for (let i in accounts){
        if (accessUser ==  accounts[i][0] && accessPass == accounts[i][1]){
            found = true
            document.write(`<h1 style="text-align:center; color:blue; margin-top:50px;"> welcome 
                <span style="font-weight:bold; color:red;">
                ${accessUser.toUpperCase()}</span> </h1>`)
                setTimeout(() => location.href='login.html', 2000); //redirect to
                // window.location.replace("login.html")

        }
    }
    if (found == false) {
        alert('Invalid Username or Password')
    }
})
