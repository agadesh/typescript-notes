// function showToDo(todo: { title: string; text: string }) {
//   console.log(todo.title + '-> ' + todo.text);
// }

// let myToDo = {
//   title: 'trash',
//   text: 'take out trash',
// };
// showToDo(myToDo);

interface Todo {
  title: string;
  text: string;
}
function showToDo(todo: Todo) {
  console.log(todo.title + '-> ' + todo.text);
}
let myToDo = {
  title: 'stuff',
  text: 'get stuff',
};
showToDo(myToDo);
