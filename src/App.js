import DateHead from './components/DateHead.js';
import Weather from './components/Weather.js';
import TodoList from './components/TodoList.js';
import './App.css';

function App() {
  return (
    <div className="today-todolist__box">
      <div className="date-weather__info">
        <DateHead />
        <Weather />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
