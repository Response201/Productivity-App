import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, deleteTodo } from "./reducer/todos";
import "./App.css";

function App() {
  const [title, setTitle] = useState('')

  const todos = useSelector((store) => store.todos.todosList);
  const dispatch = useDispatch();

  useEffect(() => {}, []);




  return (
    <div className="App">
      <h1>hello</h1>

<section>

<input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />  




</section>








      {todos &&
        todos.map((item) => {
            /* change if task is done or not */
          const onClickDone = () => {
            dispatch(completeTodo({ id: item.id, done: !item.done }));
          };

  /* Delete task */

  const onClickDelete = () => {
    dispatch(deleteTodo({ id: item.id}));
  };

          return (
            <section key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              {item.category.map((e) => (
                <>
                  <p>{e.type}</p>

                  <p>{e.where}</p>
                </>
              ))}
              <input
                type="checkbox"
                checked={item.done}
                value={item.id}
                onClick={onClickDone}
              />


              <button onClick={onClickDelete}>Delete</button>
            </section>
          );
        })}
    </div>
  );
}

export default App;
