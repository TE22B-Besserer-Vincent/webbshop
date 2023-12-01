import data from '../products.json' assert { type: 'json' };
const products = data.products;

document.onload = LoadProducts()

// Funktion som laddar produkter till webbshoppen
function LoadProducts() {
    products.forEach(element => {
        var containerDiv = document.createElement('div');
        containerDiv.classList.add('product');

        // Produktbild
        var image = document.createElement('img');
        image.src = element.img;
        image.alt = element.imgalt;

        // Produkt titel
        var name = document.createElement('h2');
        name.textContent = element.name;

        // Produktpris
        var price = document.createElement('p');
        price.textContent = element.price;

        // Köp knappen
        var button = document.createElement('button');
        button.textContent = 'Köp';
        button.id = element.index;
        button.onclick = function() {
            AddToCart(this.id);
        };

        containerDiv.appendChild(image);
        containerDiv.appendChild(name);
        containerDiv.appendChild(price);
        containerDiv.appendChild(button);

        var targetDiv = document.getElementById("produktcontainer");

        targetDiv.appendChild(containerDiv);
    });
}

// Funktion som lägger en produkt i korgen genom localstorage.
function AddToCart(id) {
    // Kolla igenom alla produkter och hitta rätt
    products.forEach(element => {
        if (element.index == id) {
            const item = {
                name: element.name,
                price: element.price,
                img: element.img
            }
            addItemToLocalStorage("produkter", item)
        }
    });
}

// Funktion som lägger till en produkt i localstorage
function addItemToLocalStorage(itemKey, item) {
    const existingItems = JSON.parse(localStorage.getItem(itemKey)) || []; // Hämta localstorage (ifall det finns produkter)

    var duplicate = false;

    // Kollar om produkten redan finns i korgen.
    existingItems.forEach(element => {
        if (element.name == item.name) {
            duplicate = true;
        }
    });

    if (duplicate) { return; }

    existingItems.push(item); // Lägg till den nya produkten i listan
 
    localStorage.setItem(itemKey, JSON.stringify(existingItems)); // Lägg in nya i localstorage.
}