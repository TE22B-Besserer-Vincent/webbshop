// Hämta localstorage för "produkter" och kolla om det är tomt, om inte -> ladda produkterna.

function fetchLocalStorage() {
    const existingItems = JSON.parse(localStorage.getItem("produkter")) || []; // Hämta localstorage (ifall det finns produkter)
    if (!existingItems[0]) {
        var targetDiv = document.getElementById("container");
        var h2 = document.createElement("h2")
        h2.innerText = "Korgen är tom!";
        targetDiv.appendChild(h2);
    } else {
        LoadProducts(existingItems);
    }
}

function ClearList() {
    localStorage.setItem('produkter', []);
    localStorage.clear();
}

// Denna funktionen är redan förklarade i andra JS filen.
function LoadProducts(existingItems) {
    var totalPrice = 0;
    existingItems.forEach(element => {
        totalPrice += element.quantity * element.price;
        var containerDiv = document.createElement('div');
        containerDiv.classList.add('product');

        var image = document.createElement('img');
        image.src = element.img;
        image.alt = element.imgalt;

        var productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        var name = document.createElement('h2');
        name.textContent = element.name;

        var price = document.createElement('p');
        price.textContent = element.price + " kr";

        var quantity = document.createElement('div');
        quantity.classList.add('quantity');

        var quantityInput = document.createElement("input");
        quantityInput.type = 'text';
        quantityInput.value = element.quantity;

        quantity.appendChild(quantityInput)

        productInfo.appendChild(name);
        productInfo.appendChild(price);
        containerDiv.appendChild(image);
        containerDiv.appendChild(productInfo);
        containerDiv.appendChild(quantity);

        var targetDiv = document.getElementById("container");

        targetDiv.appendChild(containerDiv);
    });
    var container = document.getElementById('container')

    var total = document.createElement('p');
    total.textContent = "Totalt: " + totalPrice;

    var purchaseButton = document.createElement("button")
    purchaseButton.textContent = "Köp"
    purchaseButton.onclick = function() {
        ClearList();
    };

    container.appendChild(total);
    container.appendChild(purchaseButton);
}

fetchLocalStorage();