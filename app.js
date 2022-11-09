const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");

// items.forEach((item) => {
//   item.addEventListener("dragstart", dragstart);
//   item.addEventListener("dragend", dragend);
// });
let el = ``;

// if (items) {
//   items.forEach((item) => {
//     item.addEventListener("dragstart", dragstart);
//     item.addEventListener("dragend", dragend);
//     el = item;
//   });
// }

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

for (const item of items) {
  item.addEventListener("click", onclick);
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
  // el = item;
}

function onclick(event) {
  el = event.target;
  console.log(el);
  //   console.log(event.target);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  //   event.target.classList.remove("hold", 'hide');
  event.target.className = "item";
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
  //   console.log("dragenter");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
  //   console.log("dragleave");
}

function dragdrop(event) {
  event.target.appendChild(el);
  event.target.classList.remove("hovered");
  //   console.log(event.target);
  //   console.log("dragdrop");
}
