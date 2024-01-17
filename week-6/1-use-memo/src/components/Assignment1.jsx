import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);

  // Factorial of the number
  const factorialValue = (number) => {
    if (number === 0) {
      return 1;
    }
    return number * factorialValue(number - 1);
  };

  let expensiveValue = useMemo(() => {
    let factorialOfTheNumber = factorialValue(input);
    return factorialOfTheNumber;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
