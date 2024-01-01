const openModalElement  = document.querySelector('#openModal');
const modalElemet = document.querySelector('.modal')
const modalContent = document.querySelector('.modal_content');

openModalElement.addEventListener('click', () => {
  modalElemet.classList.add('open')
})
modalContent.addEventListener('click',()=>{
  modalElemet.classList.remove('open')
})