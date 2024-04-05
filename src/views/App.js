
import './App.scss';
import ListTodo from './Todos/ListTodo';
import MyComponent from './Example/MyComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          {/* <MyComponent/> */}
          {/* <ListTodo/> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user">
              <ListUser />
            </Route>            
          </Switch>



        </header>

          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              />
              {/* Same as */}
            <ToastContainer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
