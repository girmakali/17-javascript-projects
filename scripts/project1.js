let btnElement = document.querySelector('button')
let spnElement = document.querySelector('span')

btnElement.addEventListener('click', ()=> {
  const name = prompt('please enter your name:');
  if (name === ''){
    alert('you didnt write anything ')
  }
  else{
  spnElement.textContent = name;
}})