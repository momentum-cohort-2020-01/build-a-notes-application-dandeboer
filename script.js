let notesPage = document.querySelector("#notes-page")

getNotes()

function getNotes() {
fetch("http://localhost:3000/notes/")
    .then(response => response.json())
    .then(function(data) {
        let notesData = data
        console.log(notesData)
        console.log(notesData[0].title)
        createNote()
        let title = document.querySelector(".title")
        let body = document.querySelector(".body")
        title.innerText = notesData[0].title
        body.innerText = notesData[0].body
    })
}

function createNote() {
    let div = document.createElement("div")
    let h6 = document.createElement("h6")
    let p = document.createElement("p")
    notesPage.appendChild(div)
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
let noteText = input.value
console.log(noteText)

})

