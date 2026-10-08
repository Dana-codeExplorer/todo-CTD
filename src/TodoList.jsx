
function TodoList() {
  const todoList = [
    {id: 1, title: "wash the car"},
    {id: 2, title: "make sure Shane is packed for his school trip"},
    {id: 3, title: "water plants daily"},
    {id: 4, title: "cook dinner/buy groceries"}
  ];

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
