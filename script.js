//document.getElementById("count-el").innerText = 10;

//initialize count as 0
//listen to the clicks
//increment count with every click
//change count-el in html to reflect new count

let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
    
}

