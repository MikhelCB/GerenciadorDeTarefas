import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask></AddTask>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
