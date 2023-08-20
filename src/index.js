import "./style.css"
import { inputBlock } from "./input.js"
import { toggleStyles } from "./functions.js"

const mainSection = document.getElementById("main")

function things() {
  return inputBlock
}
const addButton = document.createElement("button")
addButton.textContent = "Menu"
addButton.classList.add("addButton")
document.body.appendChild(addButton)
addButton.addEventListener("click", toggleStyles)

mainSection.appendChild(things())

