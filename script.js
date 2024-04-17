const textarea = document.querySelector("#textarea");
const button = document.querySelector("#button");
const bgColor = document.querySelector("#bgColor");
const textColor = document.querySelector("#textColor");
const right = document.querySelector("#right");

button.addEventListener("click", () => {
  if (textarea.value.trim().length === 0) {
    Toastify({
      text: "Write Something in Textbox",

      duration: 3000,
    }).showToast();

    return;
  }

  // div that return the content
  const parentNote = document.createElement("div");

  parentNote.classList.add("parentNote-styling");

  const stickyNote = document.createElement("div");
  const top = document.createElement("div");

  top.classList.add("top-styling");

  //   top div with cross and edit button

  stickyNote.classList.add("stickyNote-style");

  const edit = document.createElement("span");
  edit.classList.add("edit");
  edit.innerHTML = "Edit";

  const cross = document.createElement("span");
  cross.classList.add("cross-styling");
  cross.innerText = "X";

  top.append(edit);
  top.append(cross);

  stickyNote.append(top);

  cross.addEventListener("click", closeNote);

  edit.addEventListener("click", editStickyNote);

  edit.addEventListener("blur", makeEditableFalse);

  //   bottom div - Textarea content
  const bottom = document.createElement("div");
  bottom.classList.add("bottom-styling");
  stickyNote.append(bottom);
  bottom.innerText = textarea.value;

  stickyNote.style.backgroundColor = bgColor.value;
  stickyNote.style.color = textColor.value;

  parentNote.append(stickyNote);
  right.append(stickyNote);
  //   right.append(parentNote);

  textarea.value = "";
});

function closeNote(e) {
  return e.target.parentElement.parentElement.remove();
}

function editStickyNote(e) {
  return (e.target.parentElement.parentElement.children[1].contentEditable = true);
}

function makeEditableFalse(e) {
  return (e.target.parentElement.parentElement.children[1].contentEditable = false);
}
