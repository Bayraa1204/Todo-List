const list = document.getElementById("list");
const buttonCreate = document.getElementById("buttonCreate");
const input = document.getElementById("input");

let count = 0;

buttonCreate.addEventListener("click", function () {
  const inputtedValue = input.value;
  const textContainer = document.createElement("div");
  textContainer.className = "text-container";
  let idCount = count++;
  textContainer.id = `${idCount}`;

  const text = document.createElement("div");
  text.className = "text";
  text.innerHTML = `${inputtedValue}`;

  const buttonDelete = document.createElement("button");
  buttonDelete.id = "buttonDelete";

  textContainer.appendChild(text);
  textContainer.appendChild(buttonDelete);
  list.appendChild(textContainer);

  buttonDelete.onclick = deleteText;
  function deleteText() {
    const theId = document.getElementById(idCount);
    theId.remove();
  }
});

