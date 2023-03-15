// Catch the tag

const decrement=document.querySelector('.decrementBtn');
const increment=document.querySelector('.incrementBtn');
const reset=document.querySelector('.resetBtn');
const value=document.querySelector('.displayValue');

// for decrement button
decrement.addEventListener('dblclick',() => {
    const values = Number(value.innerText);
    if(values > 0){
        value.innerText = values - 1
    }
    else{
        alert("Negative value not allowed")
    }
});


// for increment button
increment.addEventListener('click',() => {
    const values = Number(value.innerText);
    if(values >= 10){
        alert("Value greater than 10 is not allowed")
    }
    else{
        value.innerText = values + 1
    }
});


// for reset button
reset.addEventListener('click',() => {
    value.innerText = 0
});