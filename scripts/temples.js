const menuTog = document.getElementById('menu-tog');
const menu = document.getElementById('menu');
const year = document.getElementById('year');
const modified = document.getElementById('last-modified');

menuTog.addEventListener("click", () =>{
    menu.classList.toggle("open");
    menuTog.textContent = menu.classList.contains("open")? "X": "☰";

    /*if (menu.style.display ==='block'){
        menu.style.display = 'none';
        menuTog.textContent = '☰'
    } else{
        menu.style.display = 'block';
        menuTog.textContent = 'X'
    }*/
});

const date = new Date();
year.innerHTML =  date.getFullYear();
modified.innerHTML = `Last Modified: ${document.lastModified}`;