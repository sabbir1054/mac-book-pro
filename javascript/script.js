//Price Text to Number converter function
function priceTextToNumber(id) {
  const priceText = document.getElementById(id).innerText;
  const priceNumber = parseFloat(priceText);

  return priceNumber;
}

//Price update function
function updatePrice(id, amount, updateCostId) {
  if (id == "memory8gb" || id == "storage256gb" || id == "freeDelivery") {
    document.getElementById(updateCostId).innerText = 0;
  } else {
    if (
      id == "memory16gb" ||
      id == "storage512gb" ||
      id == "storage1tb" ||
      id == "fastDelivery"
    ) {
      document.getElementById(updateCostId).innerText = amount;
    }
  }
  totalPriceUpdate();
}

//Update Total and Grand Total Calculate and update function
function totalPriceUpdate() {
  const totalPrice = document.getElementById("total-price");
  const grandTotalPrice = document.getElementById("grand-total");
  const calculateTotalPrice =
    priceTextToNumber("best-price") +
    priceTextToNumber("memory-cost") +
    priceTextToNumber("storage-cost") +
    priceTextToNumber("delivery-cost");
  totalPrice.innerText = calculateTotalPrice;
  grandTotalPrice.innerText = calculateTotalPrice;
}

//Promo code calculated and update grand total event handler
const applyPromo = document.getElementById("apply-promo");
applyPromo.addEventListener("click", function applyPromo() {
      
    const inputPromo = document.getElementById("input-promo").value;
    const grandTotalPrice = document.getElementById("grand-total");

    if (inputPromo == "stevekaku") {
      const grandTotalPriceValue = priceTextToNumber("grand-total");
      const newPriceWithDiscount =
        grandTotalPriceValue - grandTotalPriceValue * (20 / 100);
      grandTotalPrice.innerText = parseFloat(newPriceWithDiscount);
      document.getElementById("input-promo").value = "";
    } else {
      return;
    }
  });
