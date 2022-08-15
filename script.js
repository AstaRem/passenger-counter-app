//document.getElementById("count-el").innerText = 10;

//initialize count as 0
//listen to the clicks
//increment count with every click
//change count-el in html to reflect new count

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let totalCount = document.getElementById("total-count")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    
}

// 1. Create a function, save(), which logs out the count when it's called
function save(){
    document.getElementById("save-btn").innerText(count)
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let currentCount = `${count} - `
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += currentCount
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    count = 0
    countEl.textContent = count
}
