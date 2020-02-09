let notesPage = document.querySelector("#notes-page")

getNotes()

function getNotes() {
fetch("http://localhost:3000/notes/")
    .then(response => response.json())
    .then(function(data) {
        let notesData = data
        for (let noteData of notesData) {
        console.log(notesData)
        console.log(noteData)
        createNote()
        let title = document.querySelector(".title")
        let body = document.querySelector(".body")
        title.innerText = noteData.title
        body.innerText = noteData.body
    }})
}

function createNote() {
    let div = document.createElement("div")
    let h6 = document.createElement("h6")
    let p = document.createElement("p")
    notesPage.insertBefore(div, document.querySelector(".note"))
    div.setAttribute("class", "note")
    div.appendChild(h6)
    h6.setAttribute("class", "title")
    div.appendChild(p)
    p.setAttribute("class", "body")
}

let form = document.querySelector("#form")
let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
console.log(form)

form.addEventListener("submit", e => {
e.preventDefault()
console.log(input.value)
let noteText = {body: input.value}
console.log(noteText)
fetch("http://localhost:3000/notes/", {
    method: "post",
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify(noteText)
})
    .then(response => response.json())
    input.value = ""
})

