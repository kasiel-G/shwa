let menuButton = document.getElementById('menu-icon');
let closeButton = document.getElementById('close-icon');
let checkbutton = document.getElementById('checkbutton');
let menu = document.getElementsByClassName('menu');
let body = document.querySelector('body');
let overlay = document.getElementById('overlay');

console.log(menuButton, closeButton, checkbutton);
   menuButton.addEventListener('click', () =>{
    menuButton.style.display = 'none';
        closeButton.style.display = 'block';
        console.log(menu);
        menu[0].classList.toggle('active');
        overlay.classList.toggle('overlay');
   })
   closeButton.addEventListener('click', () =>{
        closeButton.style.display = 'none';
        menuButton.style.display = 'block';
        menu[0].classList.toggle('active');
        overlay.classList.toggle('overlay');

   })

   let buttonscroll = document.getElementById('logoBox');
   buttonscroll.addEventListener('click',(e)=> {
       e.preventDefault();
       footer = document.querySelector('footer');
       footer.classList.toggle('active2');
   }); 