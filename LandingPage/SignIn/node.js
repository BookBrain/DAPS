const username = document.getElementById('username')
const password = document.getElementById('password')
const btn = document.getElementById('btn')

function anotherPage(){
    window.location.href = "book.html"
}

function valid(){
    console.log("worked");
    const userName  = username.value ;
    if (userName.value === '' || password.value === '') {
        alert("Invalid Input")
        return false
    }
    else{
         btn.onclick = anotherPage()
    }
}

 valid()