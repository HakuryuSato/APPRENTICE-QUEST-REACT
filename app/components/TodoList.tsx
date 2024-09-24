export default function TodoList() {
    const todos = [
      { text: "Reactのドキュメントを読む", completed: false },
      { text: "Reactの練習問題を解く", completed: true },
    ];
  
    return (
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text} {todo.completed && "✓"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  