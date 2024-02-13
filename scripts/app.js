import {saveToLocalStorage, getLocalStorage, RemoveFromLocalStorage} from "./localstorage.js"

//Add name stuff
let nameInput = document.getElementById('nameInput');
let addNameBtn = document.getElementById('addNameBtn');

//RndGroup stuff
let customRange2 = document.getElementById('customRange2');
let getGroupBtn = document.getElementById('getGroupBtn');
let sliderCounter = document.getElementById('sliderCounter');

//People list area
let peopleList = document.getElementById('peopleList');
let removeNameBtn = document.getElementById('removeNameBtn');


//Random button

let randomize = document.getElementById('randomize');
let loadFavs = []

//Slider


//Modal
let modalDiv = document.getElementById('modalDiv');


sliderCounter.innerText = customRange2.value
customRange2.oninput = function() {
    sliderCounter.innerText = customRange2.value
}


addNameBtn.addEventListener('click', function(){
    let inpName = nameInput.value.trim()
    console.log(inpName)
    saveToLocalStorage(inpName);

if (!loadFavs.includes(inpName)) {
        populatePerson(inpName)  
    }
    


}) 

let lastAdded = ""

const populatePerson = (inpName) => {
    lastAdded = inpName
    let person = document.createElement("div");
    person.classList.add("mx-2", "py-2", "d-flex")
    person.id = lastAdded
    person.innerHTML = `
    <span class="badge rounded-pill p-2 text-bg-secondary">${inpName}</span>
    `
    peopleList.appendChild(person);
}



const initialize = () =>{
    loadFavs =  getLocalStorage()
    console.log(loadFavs)
    loadFavs.map(favorite => populatePerson(favorite));
    customRange2.max = loadFavs.length -1;
}

initialize()


removeNameBtn.addEventListener('click', ()=>{
    let inpName = nameInput.value.trim()
    console.log(inpName)
    RemoveFromLocalStorage(inpName)
    document.getElementById(inpName).remove();
    loadFavs =  getLocalStorage()
})

randomize.addEventListener('click', () =>{

    let ranNum = Math.floor(Math.random() * loadFavs.length - 1);
    console.log(ranNum);
    modalDiv.innerHTML = `
    <p>${loadFavs[ranNum]}</p>
    `
})




getGroupBtn.addEventListener('click', ()=>{

})