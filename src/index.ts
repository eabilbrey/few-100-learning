
import './styles.css';
import { add } from './math';

// 1. find the important things you need on the page.

const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLInputElement;
const answer = document.getElementById('answer') as HTMLSpanElement;

console.log({
    num1,
    num2,
    addButton,
    answer
});

console.log(num1.valueAsNumber);


// 2. Hook up the events

addButton.addEventListener('click', handleAddClick);

function handleAddClick() {
    const a = num1.valueAsNumber;
    const b = num2.valueAsNumber;
    const sum = add(a, b);
    answer.innerText = sum.toString();
    num1.focus();
}

// 3. Make it not suck so bad --- isNaN(NaN) true isNaN(12) false
