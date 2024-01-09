/* 
Write a component that takes a todo id as an input and fetches the data for that todo from the given endpoint and then renders it
How would the dependency array change?
https://sum-server.100xdevs.com/todo?id=1
*/

import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";

const TodoWithId = ({ todoId }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
      .then(function (response) {
        setTodo(response.data.todo);
      });
  }, [todoId]);
  return (
    <>
      <Todo key={todo.id} title={todo.title} description={todo.description} />
    </>
  );
};

export default TodoWithId;
