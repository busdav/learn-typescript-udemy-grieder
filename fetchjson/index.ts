import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

/*
The get request will be async, which means we'll get back a promise. In order to get notified when the request is complete,
we can chain on a `.then` statement which will be called with the response once we get the response from the API.
Remember that we cannot execute typescript in a browser or with node - we first need to COMPILE it into javascript. 
For that, use the Typescript global npm package: in command line, `tsc index.ts`, and it will create `index.js`. 
Thereafter, we can execute the index.js e.g. with node. 
However, we can also combine these two steps with the npm package ts-node, as in `ts-node index.ts`. 
*/

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
