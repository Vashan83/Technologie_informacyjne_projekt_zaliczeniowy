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
