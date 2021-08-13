import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList=new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

/*
const tarea=new Todo('Aprende JavaScript');
todoList.nuevoTodo(tarea);

console.log(tarea);

crearTodoHtml(tarea);*/
