let buttons = document.querySelectorAll('button');
let articlee = document.getElementById('articles');

buttons.forEach((click , i) =>{ 
click.addEventListener('click', () => {
  articlee.style.display = 'none';
  articlee.innerHTML = document.getElementById(`section${i}`).innerHTML;
  articlee.style.display = 'block';
});})

