import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispathch = useDispatch();

  return (
    <>
      <h2 className="bg-red-500">Technet</h2>
      <div>
        <div>
          <button
            className="bg-green-500"
            onClick={() => dispathch(increment())}
          >
            Increment
          </button>
        </div>
        <div>{count}</div>
        <div>
          <button className="bg-red-500" onClick={() => dispathch(decrement())}>
            Decrement
          </button>
        </div>
        <div>
        <button className="bg-red-500" onClick={() => dispathch(incrementByAmount(5))}>
           amount
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
