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

// Denna funktionen är redan förklarade i andra JS filen.
function LoadProducts(existingItems) {
    existingItems.forEach(element => {
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
        price.textContent = element.price;

        var quantity = document.createElement('div');
        quantity.classList.add('quantity');
        
        var button1 = document.createElement('button');
        button1.id = element.index;
        button1.textContent = '-';
        button1.id = element.index;
        var button2 = document.createElement('button');
        button2.id = element.index;
        button2.textContent = '+';
        button2.id = element.index;
        var quantitiyNum = document.createElement('p')
        quantitiyNum.innerHTML = element.quantity;

        quantity.appendChild(button1)
        quantity.appendChild(quantitiyNum)
        quantity.appendChild(button2)

        productInfo.appendChild(name);
        productInfo.appendChild(price);
        containerDiv.appendChild(image);
        containerDiv.appendChild(productInfo);
        containerDiv.appendChild(quantity);

        var targetDiv = document.getElementById("container");

        targetDiv.appendChild(containerDiv);
    });
}

fetchLocalStorage();