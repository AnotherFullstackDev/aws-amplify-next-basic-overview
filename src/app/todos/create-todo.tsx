"use client";

import { client } from "@/src/app/utils";

export default function CreateTodo() {
  const handleAddTodo = () => {
    client.models.Todo.create({
      content: window.prompt("Enter todo content!"),
    });
  };

  return <button onClick={handleAddTodo}>Add todo</button>;
}
