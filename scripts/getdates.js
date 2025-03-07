const year = document.getElementById('currentyear');
const modified = document.getElementById('lastModified');

const date = new Date();
year.innerHTML =  date.getFullYear();
modified.innerHTML = `Last Modified: ${document.lastModified}`;