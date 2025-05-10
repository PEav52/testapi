const baseUrl = 'https://goodbudgetforcambodianresident.rf.gd/';

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('taskForm').addEventListener('submit', handleSubmit);
}

async function loadTasks() {
    try {
        const response = await fetch(baseUrl + 'api.php');
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}

function displayTasks(tasks) {
    const tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
    });
}

function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = 'list-group-item task-item d-flex justify-content-between align-items-center';
    div.innerHTML = `
        <div>
            <h6 class="mb-1">${task.title}</h6>
            <p class="task-description mb-0">${task.description}</p>
        </div>
        <div class="task-actions">
            <button class="btn btn-sm btn-outline-primary btn-edit me-2" onclick="editTask(${task.id})">Edit</button>
            <button class="btn btn-sm btn-outline-danger btn-delete" onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `;
    return div;
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    try {
        const response = await fetch(baseUrl + 'api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description })
        });

        if (response.ok) {
            document.getElementById('taskForm').reset();
            loadTasks();
        }
    } catch (error) {
        console.error('Error creating task:', error);
    }
}

async function editTask(id) {
    const title = prompt('Enter new title:');
    const description = prompt('Enter new description:');

    if (title && description) {
        try {
            const response = await fetch(baseUrl + 'api.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, title, description })
            });

            if (response.ok) {
                loadTasks();
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }
}

async function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        try {
            const response = await fetch(baseUrl + `api.php?id=${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                loadTasks();
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }
} 
