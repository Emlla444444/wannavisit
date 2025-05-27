const name = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
    let message =[]
    if (name.value === ''|| name.value != 'Ei Ei Kyaw') {
         message.push("sorry, u're not my special VVIP precious one!!!")
    }
    if (message.length > 0){
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
})