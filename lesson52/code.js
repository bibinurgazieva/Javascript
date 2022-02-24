var token = "5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A"
var domain = "https://api.telegram.org/bot"

document.addEventListener("DOMContentLoaded", () => {
    let messages = []

    fetch("https://api.telegram.org/bot5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A/getUpdates")
    .then(Response => Response.json())
    .then(data => {
        let results = data.result
        for(let i = 0; i < results.length; i++) {
            let fromuser = results[i].message.from.first_name
            let text = results[i].message.text
            addmessage(fromuser, text)
        }
        console.log(messages)
    })
})

function sendmessage (text) {
    let url = `${domain}${token}/sendMessage?chat_id=270623373&text=${text}`
    fetch(url)
}


