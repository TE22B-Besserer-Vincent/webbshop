import data from '../products.json' assert { type: 'json' };


// Funktion som laddar produkter till webbshoppen
function LoadProducts() {
    data.products.forEach(element => {
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

        containerDiv.appendChild(image);
        containerDiv.appendChild(name);
        containerDiv.appendChild(price);
        containerDiv.appendChild(button);

        var targetDiv = document.getElementById("produktcontainer");

        targetDiv.appendChild(containerDiv);
    });
}

LoadProducts();