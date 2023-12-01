function fetchLocalStorage() {
    const existingItems = JSON.parse(localStorage.getItem("produkter")) || []; // Hämta localstorage (ifall det finns produkter)
    if (!existingItems) {
        console.log("Tom!");
    } else {
        existingItems.forEach(element => {
            console.log(element.name)
        });
    }
}

fetchLocalStorage();