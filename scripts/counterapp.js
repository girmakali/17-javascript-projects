const addButtonElement = document.getElementById('counterAdd');
const subButtonElement = document.getElementById('counterSub');
let counterDisplayElement = document.getElementById('counterDisplay');
let total = 0;
let limit =20;

const updateCounterDisplay = () =>{
  
  counterDisplayElement.textContent = total;
  document.body.style.setProperty( 'background-color' ,`rgb( ${(total/limit)*255} , 64 , 0)`);

}
addButtonElement.addEventListener('click' , ()=>{
  if (total >= 0 && total <20){
  total += 1;
  updateCounterDisplay()}
})

subButtonElement.addEventListener('click' , ()=>{
  if (total > 0 && total <=20){
  total -= 1;
  updateCounterDisplay()}
})
updateCounterDisplay()



