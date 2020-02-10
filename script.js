let notesPage = document.querySelector("#notes-page")
let form = document.querySelector("#form")
let titleInput = document.querySelector("#title-input")
let bodyInput = document.querySelector("#body-input")
let submit = document.querySelector(".submit")

getNotes()

function getNotes() {
    fetch("http://localhost:3000/notes/")
        .then(response => response.json())
        .then(function (data) {
            let notesData = data
            for (let noteData of notesData) {
                createNote()
                let title = document.querySelector(".title")
                let body = document.querySelector(".body")
                let note = document.querySelector(".note")
                title.innerText = noteData.title
                body.innerText = noteData.body
                let deleteButtons = document.querySelector(".delete")
                deleteButtons.addEventListener("click", e => {
                    note.remove()
                    console.log(noteData.id + " deleted")
                    fetch("http://localhost:3000/notes/" + noteData.id, {
                        method: "delete",
                        headers: { "Content-Type": "application/json" },
                    })
                })
            }
        })
}

function createNote() {
    let div = document.createElement("div")
    let h6 = document.createElement("h6")
    let p = document.createElement("p")
    let button = document.createElement("button")
    notesPage.insertBefore(div, document.querySelector(".note"))
    div.setAttribute("class", "note")
    div.appendChild(h6)
    h6.setAttribute("class", "title")
    div.appendChild(p)
    p.setAttribute("class", "body")
    div.appendChild(button)
    button.setAttribute("type", "button")
    button.setAttribute("class", "delete")
    button.innerText = "Delete"

}

form.addEventListener("submit", e => {
    e.preventDefault()
    let noteText = { body: bodyInput.value, title: titleInput.value }
    console.log(noteText)
    fetch("http://localhost:3000/notes/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noteText)
    })
        .then(response => response.json())
    titleInput.value = ""
    bodyInput.value = ""
})

