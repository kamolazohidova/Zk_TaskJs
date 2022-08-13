const elMain = document.getElementById('main')
const elInp = document.getElementById('input')
const elBtn = document.getElementById('btn')
const serachInput = document.getElementById('serachInput');

let inputValue = '';

let person = [
    { id: 1, name: "Robiya" },
    { id: 2, name: "Roziya" },
    { id: 3, name: "Ruqiya" },
]


serachInput.addEventListener('change', (e)=> {
    inputValue = e.target.value
    getUser()
})


function delUser(id) {
    person = person.filter((value) => value.id != id)
    getUser()
}


function getUser() {
    elMain.innerHTML = person.map((value)=> (value.name + '').includes(inputValue) && (`<div class="wrap">
        <h2 class="wrap__num">${value.id}</h2>
        <h2 class="wrap__title">${value.name}</h2>
        <button class="wrap__btn" onClick={delUser(${value.id})} >Delete</button>
    </div>`)).filter(Boolean).join('')
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
