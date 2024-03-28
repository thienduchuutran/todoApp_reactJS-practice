
import './App.scss';
import ListTodo from './Todos/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world with React.js (Hoi Dan IT)
        </p>

        {/* <MyComponent/> */}
        <ListTodo/>
      </header>
    </div>
  );
}

export default App;
