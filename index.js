
import {add} from "./function.js"
const result = add(2,3)
console.log(result)

// connecting t


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

// when a user aclick the add button we want 
// something to happen

addButtonEl.addEventListener("click", function(){
    // console.log("butter")
    // console.log(inputFieldEl.value)
    let inputValue = inputFieldEl.value
    console.log(inputValue)
})

