import { useMemo, useState } from "react";

const UseMemoHookExample = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        name="sum-counter"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>
        Sum from 1 to {inputValue} is {count}
      </p>
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

export default UseMemoHookExample;
