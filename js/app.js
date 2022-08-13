const elMain = document.getElementById('main')
const elInp = document.getElementById('input')
const elBtn = document.getElementById('btn')


let person = [
    { id: 1, name: "Robiya" },
    { id: 2, name: "Roziya" },
    { id: 3, name: "Ruqiya" },
]


function delUser(id) {
    person = person.filter((value) => value.id != id)
    getUser()
}


function getUser() {
    let user = ''
    person.map((value) => {
        user += `<div class="wrap">
        <h2 class="wrap__title">${value.name}</h2>
        <button class="wrap__btn" onClick={delUser(${value.id})} >Delete</button>
        </div>`
    })
    elMain.innerHTML = user
}


function addUser(aliBuli) {
    if (elInp.value !== "") {
        person = [...person, { id: person.length + 1, name: elInp.value }]
        input.value = '';
        aliBuli()
    }
}


elBtn.addEventListener('click', () => {
    console.log(elInp.value);
    addUser(getUser)
})

getUser()
