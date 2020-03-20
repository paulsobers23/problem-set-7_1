const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const Task = require('./ui/Task');
const TaskList = require('./ui/TaskList');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const taskList = new TaskList();

// Renders list of tasks
app.get('/', (req, res) => {
  res.render('view-task', { taskList });
});


app.get('/addTask', (req, res) => {
  res.render('addTask', { taskList });
});

// Handle post request made to our form on our route addTask
app.post('/addTask', (req, res) => {
  const { task, dueDate } = req.body;
  const newTask = new Task(task, dueDate);
  taskList.addTask(newTask);
  res.render('view-task', { taskList });
});

// Handle get request to delete Task objects out of tasklist and redirect to home page
app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  taskList.deleteTask(id);
  res.redirect('/');
});


app.get('/update/:id', (req, res) => {
  const { id } = req.params;
  const oldTask = taskList.tasks[id];
  res.render('updateTask', { oldTask });
});


app.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const oldTask = taskList.tasks[id];
  const { newTask } = req.body;
  oldTask.updateTask(newTask);
  res.redirect('/');
});


app.get('/markComplete/:id', (req, res) => {
  const { id } = req.params;
  const task = taskList.tasks[id];
  task.markComplete();
  res.redirect('/');
});

app.listen(port, () => console.log(`Serving running on port ${port}`));
