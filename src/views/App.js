
import './App.scss';
import ListTodo from './Todos/ListTodo';
import MyComponent from './Example/MyComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import HomeLayout from '../components/main/HomeLayout';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        
          {/* <MyComponent/> */}
          {/* <ListTodo/> */}
          <Switch>
            <Route path="/" exact>
              <HomeLayout/>
            </Route>
            <Route path="/todos">
              <HomeLayout/>
            </Route>
            <Route path="/about">
              <HomeLayout/>
            </Route>
            <Route path="/user" exact>
              <HomeLayout/>
            </Route>         
            <Route path="/user/:id">    {/* the : is telling that the word after it is a param */}
              <HomeLayout/>
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
