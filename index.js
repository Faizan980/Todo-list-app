const todoButton = document.getElementById('todo-button')
const container = document.getElementById('container')


function addNewTodo() {
    container.innerHTML += `
        <div class="todo">
            <input type="text" class="todo_value" placeholder="Todo">
            <input type="checkbox" class="todo_checkbox">
        </div>
    `
}