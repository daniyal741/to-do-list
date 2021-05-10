import './App.css';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer.jsx';
import TodosList from './components/TodosList';
import { About } from './components/About';

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {

    console.log('asas', title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {

      sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);


  }

  const onDelete = (todo) => {

    console.log("Hello", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router basename='/to-do-list'>
        <Header title='Logo'></Header>
        <Switch>
          <Route exact path='/' render={() => {

            return (
              <div className='container'>
                <AddTodo addTodo={addTodo}></AddTodo>
                <TodosList todos={todos} onDelete={onDelete}></TodosList>
              </div>
            );

          }}>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>

        <Footer title='Footer'></Footer>
      </Router>
    </>
  );
}

export default App;
