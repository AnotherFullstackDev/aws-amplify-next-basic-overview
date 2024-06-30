"use client";

import CreateTodo from "@/src/app/todos/create-todo";
import { client } from "@/src/app/utils";
import { useEffect, useState } from "react";

export default function TodosPage() {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data: todos } = await client.models.Todo.list();

      setTodos(todos);
    };

    client.models.Todo.observeQuery().subscribe({
      next: (newTodos) => {
        setTodos([...newTodos.items]);
      },
    });

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}
