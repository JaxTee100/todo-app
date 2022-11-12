import React,{ useState, useEffect } from "react";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoList";


function App() {
  
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos]  = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([]);

  //runs once
  useEffect(() =>{
  getLocalTodos();
 }, [])

  //useeffects
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false ));
        break;

      default: 
        setFilteredTodos(todos);
        break;
    }
    

  }

  //save to local
  const saveLocalTodos = () => {
  
      localStorage.setItem('', JSON.stringify(todos));
    
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify(todos));
    }else{
      let todoLocal = JSON.parse(window.localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }



  return (
    <div className="App">
     <header>
      <h1>My Custom Todo List App</h1>
     </header>
     <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText = {setInputText}
        setStatus={setStatus}
      />
     <TodoList 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText}
      filteredTodos={filteredTodos}
    />
    </div>
  );
}

export default App;
