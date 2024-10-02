// Initial todo list
const todoList = [
  {
    name: 'Make dinner',
    dueDate: '2024-12-22'
  },
  {
    name: 'Wash dishes',
    dueDate: '2024-12-22'
  }
];

// Function to render the todo list
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
      <p>
        <strong>${name}</strong>${dueDate}
        <button onclick="deleteTodo(${i});">Delete</button>
      </p>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

// Function to add a new todo
function addTodo() {
  const nameInput = document.querySelector('.js-name-input');
  const dateInput = document.querySelector('.js-date-input');

  const name = nameInput.value.trim();
  const dueDate = dateInput.value;

  // Validate that fields are not empty
  if (name === '' || dueDate === '') {
    alert('Please complete both fields.');
    return;
  }

  // Add new task to the list
  todoList.push({ name, dueDate });

  // Clear input fields
  nameInput.value = '';
  dateInput.value = '';

  // Render the updated list
  renderTodoList();
}

// Function to delete a todo by index
function deleteTodo(index) {
  // Confirm deletion
  const confirmDelete = confirm('Are you sure you want to delete this task?');
  if (confirmDelete) {
    todoList.splice(index, 1);
    renderTodoList();
  }
}

// Render todo list on page load
document.addEventListener('DOMContentLoaded', renderTodoList);
