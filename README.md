# Task Manager API

A simple task management system built with PHP and JavaScript, featuring CRUD operations and JSON data exchange.

## Features

- Create, Read, Update, and Delete tasks
- Modern and responsive UI using Bootstrap
- RESTful API endpoints
- JSON data exchange
- Real-time updates

## Setup Instructions

1. Make sure you have PHP and MySQL installed on your system
2. Create a new MySQL database named `task_manager`
3. Create the tasks table using the following SQL:

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4. Update the database credentials in `config.php` if needed
5. Place all files in your web server directory
6. Access the application through your web browser

## API Endpoints

- GET `/api.php` - Retrieve all tasks
- POST `/api.php` - Create a new task
- PUT `/api.php` - Update an existing task
- DELETE `/api.php?id={task_id}` - Delete a task

## File Structure

- `index.html` - Main application interface
- `style.css` - Custom styles
- `script.js` - Frontend JavaScript code
- `api.php` - Backend API endpoints
- `config.php` - Database configuration

## Technologies Used

- PHP
- JavaScript (ES6+)
- MySQL
- Bootstrap 5
- JSON 