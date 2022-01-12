import API from "../api/api.js"
import { domElements } from "../../utils/dom-elements.js";

export class Cart {

  addEventsToButton() {
    const $productRemoveButtonListAsArray = [...document.querySelectorAll(".js-product-remove-button")]
    $productRemoveButtonListAsArray.forEach(button => {
      button.addEventListener("click", this.removeProduct)
    })

    const $increaseButtonListAsArray = [...document.querySelectorAll(".js-increase-product-quantity")]
    $increaseButtonListAsArray.forEach(button => {
      button.addEventListener("click", this.increaseProduct)
    })

    const $decreaseButtonListAsArray = [...document.querySelectorAll(".js-decrease-product-quantity")]
    $decreaseButtonListAsArray.forEach(button => {
      button.addEventListener("click", this.decreaseProduct)
    })
  }

  removeProduct = async(event) => {
    const target = event.target
    const variantId = Number(target.dataset.variantId)
    const item = {
      id: variantId,
      quantity: 0
    }
    const cartUpdate = await API.updateCart(item)
    this.update()
  }

  increaseProduct = async(event) => {
    const target = event.target
    const variantId = Number(target.dataset.variantId)
    const quantity = Number(target.parentNode.dataset.quantity)
    console.log(target)
    debugger
    const item = {
      id: variantId,
      quantity: quantity + 1
    }
    const cartUpdate = await API.updateCart(item)
    this.update()
  }

  decreaseProduct = async(event) => {
    const target = event.target
    const variantId = Number(target.dataset.variantId)
    const quantity = Number(target.parentNode.dataset.quantity)
    const item = {
      id: variantId,
      quantity: quantity - 1
    }
    const cartUpdate = await API.updateCart(item)
    this.update()
  }

  async update() {
    domElements().$sideCartContent.innerHTML = ""
    const html = await API.updateShopifySection('side-cart')
    domElements().$sideCartContent.innerHTML = html
    this.addEventsToButton()
  }

  openModal = () => {
    domElements().$sideCartOverlay.classList.add("active")
    this.update()
  }

  closeModal = (event) => {
    if (event.target.classList.contains("js-close-side-cart")) {
      domElements().$sideCartOverlay.classList.remove("is-active")
    }  
  }

}