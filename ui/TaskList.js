class TaskList{
  constructor(){
    this.tasks = {};
    this.count = 0;
  }
  
    // Create a task id property and assign it to the task param
  addTask(task){
    this.tasks[task.id] = task;
    return ++ this.count;
  }
  
  deleteTask(id){
    const deletedTask = this.tasks[id];
    delete this.tasks[id];
    this.count -= 1;
    return deletedTask;
  }
 
}

module.exports = TaskList;