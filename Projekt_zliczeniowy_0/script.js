document.addEventListener("DOMContentLoaded", () => {
    const cartItemsList = document.getElementById("cartItems");
    const totalPriceSpan = document.getElementById("totalPrice");
    
    // Koszyk – tablica obiektów
    let cart = [];

    // Funkcja do odświeżenia widoku koszyka
    function updateCartView() {
        cartItemsList.innerHTML = ""; // czyścimy listę
        localStorage.setItem("cart", JSON.stringify(cart));

    
    
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} zł (Ilość: ${item.quantity})`;
        
        // Przycisk do usunięcia produktu
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Usuń";
        removeBtn.addEventListener("click", () => {
        removeFromCart(index);
        });

        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
        
        total += item.price * item.quantity;
    });
    
    totalPriceSpan.textContent = total;
    }

    // Funkcja dodawania do koszyka
    function addToCart(name, price) {
      // Sprawdzamy, czy produkt już jest w koszyku
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        // Jeśli tak, zwiększamy ilość
        cart[existingItemIndex].quantity++;
    } else {
        // Jeśli nie, dodajemy nowy obiekt
        cart.push({
        name: name,
        price: parseFloat(price),
        quantity: 1
        });
    }
    updateCartView();
    }

    // Funkcja usuwania z koszyka
    function removeFromCart(index) {
      // Jeśli ilość większa niż 1, zmniejszamy. Jeśli 1, usuwamy produkt.
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCartView();
    }

    // Podpinamy się do przycisków dodawania
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");
        addToCart(name, price);
    });
    });
});

function zlozonoZamowienie() {
    alert("Dziękujemy za złożenie zamówienia!");
}

function wyswietlWysylke() {
    document.getElementById("wysylka").style.display = "block";
}

function wyswietlProfil() {
    document.getElementById("profilPrzycisk").style.display = "block";
}

var imagesArray = ["images/Tarot/the_devil.png", "images/Tarot/the_fool.png", "images/Tarot/the_empress.png", "images/Tarot/temperance.png", "images/Tarot/the_star.png", "images/Tarot/wheel_of_fortune.png", "images/Tarot/death"];
function rozstawTarota(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num1 = Math.floor(Math.random() * 7);
    var num2 = Math.floor(Math.random() * 7);
    var num3 = Math.floor(Math.random() * 7);
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.tarot1.src = imagesArray[num1];
    document.tarot2.src = imagesArray[num2];
    document.tarot3.src = imagesArray[num3];

    document.getElementById("nierozstawionyTarot").style.display = "none";
    document.getElementById("rozstawionyTarot").style.display = "block";
}

