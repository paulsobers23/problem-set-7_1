const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');
const port = 8080;
const Task = require('./ui/Task');
const TaskList = require('./ui/TaskList');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine' , 'ejs');

const taskList = new TaskList();


app.get('/', (req,res)=>{
  res.render('view-task', {taskList});
});

// debugger;

app.get('/addTask', (req,res)=>{
  res.render('addTask', {taskList});
});

app.post('/addTask', (req,res) =>{
  const {task,dueDate} = req.body;
  const newTask = new Task(task,dueDate);
  taskList.addTask(newTask);
  console.log(taskList);
  // console.log(taskList);
  // console.log(taskList);
  res.render('view-task', {taskList});
});

app.listen(port, ()=> console.log(`Serving running on port ${port}`));