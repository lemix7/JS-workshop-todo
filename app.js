let input = document.getElementById("input");
let addBtn = document.getElementById("add");
let toDos = document.getElementById("list");

let list = [];

function addList() {
  let inputValue = input.value;

  if (inputValue !== "") {
    list.push(inputValue);

    let listContainer = document.createElement("div");
    let doneBtn = document.createElement("button");
    let listItem = document.createElement("li");

    listContainer.classList.add('listContainer')
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
  list = list.filter((l) => l !== listToRemove) // create a new array that does not contain the element passed in the argument 

  reRenderList();
}

function reRenderList() { //  render the new list after filtering 
  toDos.innerHTML = "";

  list.forEach((item) => {
    let listContainer = document.createElement("div");
    let listItem = document.createElement("li");
    let doneBtn = document.createElement("button");

    listContainer.classList.add('listContainer')

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

addBtn.addEventListener("click", addList);
