class Task {
  constructor(task, dueDate) {
    this.task = task;
    this.dueDate = new Date(dueDate);
    this.isDone = false;
    this.id = Task.count;
    Task.count += 1;
  }

  updateTask(newTask) {
    this.task = newTask;
    return newTask;
  }

  updateDueDate(newDate) {
    this.dueDate = new Date(newDate);
    return newDate;
  }

  markComplete() {
    if (this.isDone === false) {
      this.isDone = true;
    } else {
      this.isDone = false;
    }
  }
}

Task.count = 0;

module.exports = Task;
