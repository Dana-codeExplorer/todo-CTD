
function TodoList() {
  const todoList = [
    {id: 1, title: "wash the car"},
    {id: 2, title: "make sure Shane is packed for his school trip"},
    {id: 3, title: "water plants daily"}
  ];

  return (
    <div>
      <h1>Things I Have to Do</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;