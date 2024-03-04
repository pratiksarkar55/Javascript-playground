let inputBox = document.getElementById("input-id");
let listContainer = document.getElementById("list-container");

function addData(e) {
  if (inputBox.value == "") {
    alert("Please enter some value");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  addStorage();
}

listContainer.addEventListener("click", onChecked, false);

function onChecked(event) {
  console.log(event.target.tagName);
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
  addStorage();
}

getStorage();

function addStorage() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getStorage() {
  listContainer.innerHTML = localStorage.getItem("data");
}
