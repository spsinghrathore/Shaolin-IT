// Access chat function
function accessChat() {
  window.open("https://chatgpt.com/share/67928297-4184-8003-b360-48a70d3036d0", "_blank");
}

// To-Do List Functions
function addTodo() {
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  // Add delete button to each task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = function () {
    list.removeChild(li);
  };

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}

// Roadmap Progress
let currentStep = 1;
function nextStep() {
  currentStep++;
  document.getElementById("step").textContent = `Step ${currentStep}`;
}
