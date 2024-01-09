import { useCallback, useState, memo } from "react";

const Callback = () => {
  const [counter, setCounter] = useState(0);

  //   const logSomething = () => {
  //     console.log("Logging");
  //   };
  const logSomething = useCallback(() => {
    console.log("Logging");
  }, []);

  return (
    <div>
      <Child inputFunction={logSomething} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
};

const Child = memo(({ logSomething }) => {
  console.log("Child Render");
  return (
    <div>
      <button>Button Clicked</button>
    </div>
  );
});
export default Callback;

// In case of a, it will re render while in case of b,
// it will not re render as the function referentially does not change in B while it does in A
