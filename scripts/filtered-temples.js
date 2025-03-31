const menuTog = document.getElementById('menu-tog');
const menu = document.getElementById('menu');
const year = document.getElementById('year');
const modified = document.getElementById('last-modified');


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Abidjan Ivory Coast",
        location: "Abidjan, Cote d'Ivoire",
        dedicated: "2018, November, 8",
        area: 4226,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58324-main.jpg"
      },
      {
        templeName: "Adelaide Australia",
        location: "Marden, South Australia ",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
      },
      {
        templeName: "Auckland New Zealand",
        location: "Goodwood Heights, Auckland  2105, New Zealand",
        dedicated: "2025, April, 13",
        area: 45456,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg"
      },
  ];

const templesGallery = document.querySelector(".temples-gallery");
const displaytemples = (temples) =>{
    templesGallery.innerHTML = "";

    temples.forEach(temple => {
        templesGallery.innerHTML +=`<div class="card">
        <h2>${temple.templeName}</h2>
        <ul>
        <li><small>Location:</small>${temple.location}</li>
        <li><small>Dedicated:</small>${temple.dedicated}</li>
        <li><small>Size:</small>${temple.area} sq ft</li>
        </ul>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="200" height="200">
        </div>`
    });
};

displaytemples(temples);


const getYear = (temple) =>  parseInt(temple.dedicated.split(",")[0]);
const oldTemples= temples.filter(temple=> getYear(temple) < 1999);
const newTemples= temples.filter(temple=> getYear(temple) > 2000);
const largeTemples=temples.filter(temple => temple.area >  90000);
const smallTemples=temples.filter(temple => temple.area < 10000);
  
  document.querySelectorAll(".nav-group").forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          let filter = event.target.getAttribute("data-target");
          let filteredTemples;
          switch (filter) {
            case "old":
                filteredTemples = oldTemples;
                break;
            case "new":
                filteredTemples = newTemples;
                break;
            case "large":
                filteredTemples = largeTemples;
                break
            case "small":
                filteredTemples = smallTemples;
                break;
            default:
                filteredTemples = temples
        
          }

          displaytemples(filteredTemples);
          
      });
  });
  


  //for (const temple in temples) {
    /*if (Object.prototype.hasOwnProperty.call(temples, temple)) {
        const templeGallery = document.querySelector(".temples-gallery");

        templeGallery.innerHTML=`<div class="card">
        <h2>${element.templeName}</h2>
        <ul>
        <li><small>Location:</small>${element.location}</li>
        <li><small>Dedicated:</small>${element.dedicated}</li>
        <li><small>Size:</small>${element.area} sq ft</li>
        </ul>
        </div>`
    }
  }*/

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