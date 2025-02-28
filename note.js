const form = document.getElementById("noteForm");
const notesDiv = document.getElementsByClassName("note")[0];
const noteInput = document.getElementById("noteInput");
const color = document.getElementById("colorPicker");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteText = noteInput.value;
  const noteDisplay = document.createElement("p");

  const close = document.createElement("span");
  close.innerHTML = "&times;";

  noteDisplay.classList.add("box");
  noteDisplay.style.backgroundColor = color.value;
  noteDisplay.innerText = noteText;
  noteDisplay.append(close);

  notesDiv.append(noteDisplay);
  close.addEventListener("click",(e)=>{
    e.target.closest(".box").remove();
  });
  noteInput.value = "";
  noteInput.focus();
});
