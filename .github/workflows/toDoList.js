// Variables
let input = document.getElementById("new-item");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let list = document.getElementById("list");

// Attributes
add.onclick = () => {
  // Variables
  let li = document.createElement('li');
  let cb = document.createElement('input');

  // Attributes
  li.textContent = input.value.trim();
  cb.type = "checkbox";

  // Append
  li.insertBefore(cb, li.firstChild);
  list.appendChild(li);
};
remove.onclick = () => {
	// Variables
  let elements = list.querySelectorAll('input:checked');
  
  // Remove
  elements.forEach((e) => { e.parentElement.outerHTML = "" });
};