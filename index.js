const list = document.getElementById("list");
const buttonCreate = document.getElementById("buttonCreate");
const input = document.getElementById("input");
const completed = document.getElementById("completed");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weeks = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let count = 0;
let cont = 0;

buttonCreate.addEventListener("click", function () {
  if (input.value == "" || input.value[0] == " ") {
  } else {
    let idCount = count++;

    const inputtedValue = input.value;
    const dateAndContainer = document.createElement("div");
    dateAndContainer.classList = "dateAndContainer, popin";
    dateAndContainer.id = `${idCount}`;

    const theDate = document.createElement("div");
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedTime = formatter.format(date);
    console.log(formattedTime);
    theDate.innerHTML = formattedTime;
    theDate.className = "date";

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    textContainer.id = `${idCount}t`;
    const buttonDelete = document.createElement("button");
    buttonDelete.id = "buttonDelete";

    const paragraph = document.createElement("div");
    paragraph.type = "edit";
    paragraph.className = "text";
    paragraph.id = `${idCount}s`;
    paragraph.style.marginTop = "0px";
    paragraph.innerHTML = `${inputtedValue}`;

    const edit_button = document.createElement("button");
    edit_button.type = "submit";
    edit_button.className = "editButton";
    edit_button.innerHTML = "Edit";
    edit_button.id = `${idCount}e`;
    const end_button = document.createElement("button");
    end_button.type = "submit";
    end_button.className = "endButton";
    end_button.innerHTML = "Done";
    end_button.id = `${idCount}d`;

    textContainer.appendChild(paragraph);

    textContainer.appendChild(edit_button);

    textContainer.appendChild(end_button);

    buttonDelete.onclick = deleteText;
    textContainer.appendChild(buttonDelete);

    dateAndContainer.appendChild(theDate);

    dateAndContainer.appendChild(textContainer);
    function deleteText() {
      const theId = document.getElementById(`${idCount}`);
      theId.remove();
      if (completed.innerHTML == "") {
        cont = 0;
        const completeText = document.getElementById("ct");
        completeText.style.animation = "popout 0.5s ease";
        setTimeout(function () {
          completeText.remove();
        }, 500);
      }
      theId.style.animation = "popout 0.5s ease";
      setTimeout(function () {
        theId.remove();
      }, 500);
    }

    list.appendChild(dateAndContainer);

    list.insertBefore(dateAndContainer, list.children[0]);

    document.getElementById(`${idCount}s`).style.contentEditable = false;
    edit_button.addEventListener("click", function () {
      const theId = document.getElementById(`${idCount}s`);
      const values = inputtedValue;
      console.log(theId.innerHTML);

      if (
        theId.innerHTML.length == 0 ||
        theId.innerHTML == "<div><br></div><div><br></div>" ||
        thId.innerHTML.includes("&nbsp;")
      ) {
        theId.style.contentEditable = false;
        theId.contentEditable = false;
        theId.style.border = "none";
        theId.innerHTML = `${values}`;
      } else {
        if (theId.style.contentEditable == true) {
          const value = theId.innerHTML;
          if (theId.innerHTML == "") {
            theId.innerHTML = value;
            theId.style.contentEditable = false;
            theId.contentEditable = false;
            theId.style.opacity = "1";
          } else {
            theId.style.contentEditable = false;
            theId.contentEditable = false;
            theId.style.opacity = "1";
          }
          theId.style.border = "none";
        } else {
          theId.style.contentEditable = true;
          theId.contentEditable = true;
          theId.style.opacity = "0.7";
          theId.style.border = "1px solid aqua";
          theId.style.borderRadius = "5px";
        }
      }
    });
    const thId = document.getElementById(`${idCount}s`);
    end_button.addEventListener("click", function () {
      const values = inputtedValue;
      if (
        thId.innerHTML.length == 0 ||
        thId.innerHTML == `<div><br></div><div><br></div>` ||
        thId.innerHTML.includes("&nbsp;")
      ) {
        thId.style.contentEditable = false;
        thId.contentEditable = false;
        thId.style.border = "none";
        thId.innerHTML = `${values}`;
        isCompleted();
      } else {
        isCompleted();
      }
    });
    input.value = "";
    function isCompleted() {
      thId.style.contentEditable = false;
      thId.contentEditable = false;
      thId.style.border = "none";
      const done = document.getElementById(`${idCount}d`);
      const edit = document.getElementById(`${idCount}e`);
      const theId = document.getElementById(`${idCount}`);
      const taskDone = document.getElementById(`${idCount}t`);
      taskDone.style.border = "1px solid lime";
      taskDone.style.borderRadius = "5px";
      completed.appendChild(theId);
      completed.insertBefore(theId, completed.children[0]);
      edit.remove();
      done.remove();
      if (cont == 0) {
        const completedContainer =
          document.getElementsByClassName("completed")[0];
        const completedText = document.createElement("div");
        completedText.id = "ct";
        completedText.className = "popin";
        const checkedImg = document.createElement("img");
        checkedImg.src =
          "https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/15-512.png";
        checkedImg.className = "check";
        completedText.innerHTML = `Completed`;
        completedText.appendChild(checkedImg);
        completedContainer.appendChild(completedText);
        cont += 1;
      }
    }
  }
});
