import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../stateManagement/slices/storesDataSlice";


function TestTodo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state.todo.data);

  if (state.todo.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
     
    </div>
  );
}

export default TestTodo;
