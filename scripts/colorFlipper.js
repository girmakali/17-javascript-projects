const newColorElement = document.querySelector('#new-color-button')
const currentColorElement = document.querySelector('#current-color')

const hexValues = ['0','1','2','3','4','5','6','7','8','9'];

function getRandomHexValue(){
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);

  const randomHexValue = hexValues[randomIndexPosition];

  return randomHexValue;
}

function getRandomHexString(stringLength){
  let hexString = '';
  for (let i = 0; i < stringLength; i++){
    hexString += getRandomHexValue();
  }
  return hexString;

}
newColorElement.addEventListener('click', ()=>{
  const randomHexString = '#' + getRandomHexString(6);
  document.body.style.backgroundColor = randomHexString;
  currentColorElement.innerHTML = '#'+getRandomHexString(6)
})


