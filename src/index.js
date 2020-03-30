// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });


const main = document.querySelector("#main-content")
const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#task")

taskForm.addEventListener("submit", function(e){
  e.preventDafault()
  // user input
  const newTask = document.querySelector("#new-task-description").value

const taskItem = document.createElement("li")
taskItem.innerText = "table"

taskList.appendChild(taskItem)
})