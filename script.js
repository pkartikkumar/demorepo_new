document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const text = input.value.trim();
        if (text !== '') {
            addTodo(text);
            input.value = '';
        }
    });

    function addTodo(text) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = text;
        span.addEventListener('click', function() {
            span.classList.toggle('completed');
        });

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-btn';
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', function() {
            list.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    }
});
