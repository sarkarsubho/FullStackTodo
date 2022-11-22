
import './App.css';
import { Sidebar } from './components/Sidebar';
import { CreateTodo } from './pages/CreateTodo';

function App() {
  return (
    <div className="App">
     
        <Sidebar></Sidebar>
        <CreateTodo></CreateTodo>
        

    </div>
  );
}

export default App;
