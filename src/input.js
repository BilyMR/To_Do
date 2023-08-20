import { toggleStyles } from "./functions.js"

function resetForm() {
  input.value = ""
  textarea.value = ""
}

const inputBlock = document.createElement("div")
inputBlock.classList.add("inputMenu")
/*inputBlock.classList.add("hidden")*/


const titleForm = document.createElement("h2")
titleForm.textContent = "What do you gotta do?"
inputBlock.appendChild(titleForm)

function createForms(labelText, inputType, inputId, inputPH) {
  const formDiv = document.createElement("div")
  formDiv.classList.add("formDiv")

  const label = document.createElement("label")
  label.textContent = labelText
  const input = document.createElement("input")
  input.type = inputType
  input.id = inputId
  input.placeholder = inputPH
  label.setAttribute("for", inputId)
  formDiv.appendChild(label)
  formDiv.appendChild(input)

  return formDiv
}

const form1 = createForms("Task Title", "text", "titleInput", "Cleen the house")
inputBlock.appendChild(form1)
const form2 = createForms("When is it due", "date", "date")
inputBlock.appendChild(form2)
const form3 = createForms("What is it about", "text", "theme", "House, School...")
inputBlock.appendChild(form3)

const inputDiv = document.createElement("div")
inputDiv.classList.add("inputDiv")
function createInputs(labelText, inputId, value) {
  const radioLabel = document.createElement("label")
  radioLabel.textContent = labelText
  radioLabel.setAttribute("for", inputId)
  const radioButton = document.createElement("input")
  radioButton.type = "radio"
  radioButton.id = inputId
  radioButton.name = "time_urgency"
  radioButton.value = value
  inputDiv.appendChild(radioLabel)
  inputDiv.appendChild(radioButton)
}

const urgentB = createInputs("Urgent:", "urgent", "urgent")
const notUrgentB = createInputs("Not Urgent:", "notUrgent", "notUrgent")
const wheneverB = createInputs("Whenever:", "whenever", "whenever")

inputBlock.appendChild(inputDiv)

const areaDiv = document.createElement("div")
areaDiv.classList.add("formDiv")

const labelArea = document.createElement("label")
labelArea.textContent = "Notes:"
labelArea.setAttribute("for", "notesArea")
const notesArea = document.createElement("textarea")
notesArea.id = "notesArea"
notesArea.name = "notes"
notesArea.rows = 4
notesArea.cols = 25
areaDiv.appendChild(labelArea)
areaDiv.appendChild(notesArea)
inputBlock.appendChild(areaDiv)

const buttonsDiv = document.createElement("div")
buttonsDiv.classList.add("buttonsDiv")
const doneButton = document.createElement("button")
doneButton.textContent = "Done"
buttonsDiv.appendChild(doneButton)

const cancelButton = document.createElement("button")
cancelButton.textContent = "Cancel"
cancelButton.addEventListener("click", function () {
  resetForm()
  toggleStyles()
})
buttonsDiv.appendChild(cancelButton)

inputBlock.appendChild(buttonsDiv)


export { inputBlock }