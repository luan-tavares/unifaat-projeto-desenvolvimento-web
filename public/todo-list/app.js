import { Todo } from './Todo.js';

(function () {

    function disableAddButton(disabled) {
        document.getElementById('add-btn').disabled = disabled;
    }

    function renderTodos(data) {
        const ulElement = document.getElementById('todoList');
        ulElement.innerHTML = "";
        for (const id in data) {
            const info = data[id];
            const object = new Todo(info.title, id);
            object.setIsCheck(info.isChecked);
            ulElement.append(object.render(toggleCheckHandler, deleteTodoHandler));
        }
    }

    /*** Funcoes que chamam api */

    async function fetchTodos() {
        const res = await fetch('/todos');
        const data = await res.json();
        renderTodos(data);
    }

    async function addTodo() {
        const titleInput = document.getElementById('newTodoTitle');
        const title = titleInput.value.trim();

        if (!title) {
            titleInput.focus();
            return;
        }

        const todo = new Todo(title);
        const id = todo.getUuid();

        disableAddButton(true);
        const response = await fetch('/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'add', todo: todo.toJson(), id })
        });
        const data = await response.json();
        titleInput.value = '';
        renderTodos(data);
        disableAddButton(false);
    }

    async function toggleCheckHandler(id) {
        disableAddButton(true);
        const response = await fetch('/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'check', id })
        });
        const data = await response.json();
        renderTodos(data);
        disableAddButton(false);
    }

    async function deleteTodoHandler(id) {
        disableAddButton(true);
        console.log(id);
        const response = await fetch('/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'delete', id })
        });
        const data = await response.json();
        renderTodos(data);
        disableAddButton(false);
    }

    /*** Listener iniciais */

    // Suporte para Enter no input
    document.getElementById('newTodoTitle').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita comportamento padrão
            addTodo(); // Chama função de adicionar
        }
    });

    //Incluir
    document.getElementById('add-btn').addEventListener('click', function (event) {
        addTodo();
    });


    fetchTodos();

})();
