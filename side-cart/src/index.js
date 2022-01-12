import "./styles.css";
import "./styles.scss";

import { Cart } from "./cart/index.js"
import { domElements } from "./utils/dom-elements.js";

document.addEventListener('DOMContentLoaded', function() {
  console.log(domElements())
  const cart = new Cart()
  domElements().$cartIconBubble.addEventListener("click", cart.openModal)
  domElements().$sideCartCloseButton.addEventListener("click", cart.closeModal)
})



