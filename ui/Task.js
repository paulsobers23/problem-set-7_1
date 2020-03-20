class Task{
  constructor(task,dueDate, isDone){
    this.tasks = task;
    this.dueDate = new Date();
    this.isDone = false; 
    this.id = ++Task.count;
  }
  updateTask(newTask){
    this.task = newTask;
    return newTask;
  }
  updateDueDate(newDate){
    this.task = new Date(newDate);
  }
  markComplete(){
    this.isDone = true;
  }
}

Task.count = 0;

module.exports = Task;