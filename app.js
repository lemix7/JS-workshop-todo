let input = document.getElementById("input");
let addBtn = document.getElementById("add");
let toDos = document.getElementById("list");

let list = JSON.parse(localStorage.getItem("tasks")) || []; // check the local storage and load the task if avaliable 

function addList() {
  let inputValue = input.value;

  if (inputValue !== "") {
    list.push(inputValue);
    saveToLocalStorage(); // Save to localStorage

    let listContainer = document.createElement("div");
    let doneBtn = document.createElement("button");
    let listItem = document.createElement("li");

    listContainer.classList.add('listContainer');
    doneBtn.textContent = "Done";
    listItem.textContent = inputValue;

    listContainer.appendChild(listItem);
    listContainer.appendChild(doneBtn);
    toDos.appendChild(listContainer);

    doneBtn.addEventListener("click", function () {
      removeList(inputValue);
    });
  }

  input.value = "";
}

function removeList(listToRemove) { 
  list = list.filter((l) => l !== listToRemove); // Filter out the removed task
  saveToLocalStorage(); // Save the updated list to localStorage
  reRenderList();
}

function reRenderList() {
  toDos.innerHTML = ""; // Clear the list before re-rendering

  list.forEach((item) => {
    let listContainer = document.createElement("div");
    let listItem = document.createElement("li");
    let doneBtn = document.createElement("button");

    listContainer.classList.add('listContainer');

    doneBtn.textContent = "Done";
    listItem.textContent = item;

    listContainer.appendChild(listItem);
    listContainer.appendChild(doneBtn);
    toDos.appendChild(listContainer);

    doneBtn.addEventListener("click", function () {
      removeList(item);
    });
  });
}

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(list)); // Save the list to localStorage
}

addBtn.addEventListener("click", addList);

// Render the list from localStorage when the moment the page loads
reRenderList();
