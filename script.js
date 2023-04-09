let taskList = [];

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskListEl = document.getElementById("taskList");
  let task = taskInput.value.trim();

  if (task !== "") {
    taskList.push(task);

    let taskEl = document.createElement("li");
    taskEl.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="deleteTask(${
        taskList.length - 1
      })">X</button>
    `;

    taskListEl.appendChild(taskEl);
    taskInput.value = "";
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTaskList();
}

function renderTaskList() {
  let taskListEl = document.getElementById("taskList");
  taskListEl.innerHTML = "";

  taskList.forEach((task, index) => {
    let taskEl = document.createElement("li");
    taskEl.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>`;

    taskListEl.appendChild(taskEl);
  });
}

renderTaskList();
