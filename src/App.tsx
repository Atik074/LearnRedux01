import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decreament,
  increament,
  increamentByValue,
} from "./redux/feartures/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className=" rounded-lg border border-amber-400 p-10">
        <button
          onClick={() => dispatch(increament())}
          className="bg-amber-500  text-xl font-semibold rounded-lg px-6 py-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(increamentByValue({value:5}))}
          className=" mx-4 bg-amber-500  text-xl font-semibold rounded-lg px-6 py-2"
        >
          IncrementByValue
        </button>

        <h2 className="text-2xl m-10">{count}</h2>
        <button
          onClick={() => dispatch(decreament())}
          className="bg-red-500  text-xl font-semibold rounded-lg px-6 py-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
