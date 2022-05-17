const btn = document.querySelector('.toggle');
const toggle = document.querySelector('#toggle');
const mobileLinks = document.querySelector('.mobile_links');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
    mobileLinks.classList.toggle('hidden');
    mobileLinks.classList.toggle('show_links')
    toggle.classList.toggle('show_links');
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('show_overlay')
   
})

console.log(toggle);