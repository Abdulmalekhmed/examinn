/**
 * You are adding a `complete multiple` feature to a todo app that will allow users the ability to select multiple todo items and completes them all.
 * You will need to finish off the following function:
 */

/**
 * This function creates the contact list in a format that we can use in the rest of the application.
 * - `allTodos` -> a list of all of the todos
 * - `todoIdsToComplete` -> a list of ids of todos that need to be marked as completed
 *
 * The function will return a NEW array of todos where the `completedDate` and `isCompleted` 
 * fields are correctly altered. The `completedDate` needs to be filled with the current time, `isCompleted` needs to be set to true
 */
const completeMultipleTodos = (allTodos, todoIdsToComplete) => {

  return allTodos.map(todo => {

  })
};

/**
 * TEST CODE. DO NOT EDIT
 */
const testTodos = [{
    id: `t---1`,
    task: "Do question 1",
    completedDate: null,
    isCompleted: false,
  },
  {
    id: `t---2`,
    task: "Do question 2",
    completedDate: null,
    isCompleted: false,
  },
  {
    id: `t---3`,
    task: "Do question 3",
    completedDate: null,
    isCompleted: false,
  },
  {
    id: `t---4`,
    task: "Do question 4",
    completedDate: null,
    isCompleted: false,
  },
  {
    id: `t---5`,
    task: "Do question 5",
    completedDate: null,
    isCompleted: false,
  },
];
const testResults = completeMultipleTodos(testTodos, [
  testTodos[0].id,
  testTodos[1].id,
]);
console.assert(
  testResults.find((todo) => todo.id === testTodos[0].id)
  .completedDate instanceof Date
);
console.assert(
  testResults.find((todo) => todo.id === testTodos[1].id)
  .completedDate instanceof Date
);
console.assert(
  testResults.find((todo) => todo.id === testTodos[0].id).isCompleted === true
);
console.assert(
  testResults.find((todo) => todo.id === testTodos[1].id).isCompleted === true
);
console.assert(testResults.filter((todo) => todo.isCompleted).length === 2);
console.assert(
  testResults.filter((todo) => todo.completedDate instanceof Date).length === 2
);