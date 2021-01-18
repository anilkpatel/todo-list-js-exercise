//Lighthouse Lab
//Week 2, Day 5
//Todo List
//Anil Patel

//Use JS objects while refactoring a Todo List command-line app

//Object oriented programming
//Objects group state and logic to organize code.
//Everything associated to a task has been encapsulated inside the task object.

// use Object to keep track of the state
// each function now accepts a task object instead of an array index
// passing the task object to the functions; not dependent on variables outside of their own scope.
//Use methods to make functions methods of task not behaviors

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);

//Accessing properties or methods of our tasks is as simple as writing code like this:
task1.title
task1.markCompleted();
