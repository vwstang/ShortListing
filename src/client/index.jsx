import React, { useState } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Test</h1>
      <p>Clicked the button {count} time(s)</p>
      <button onClick={() => setCount(count + 1)}>Click me?</button>
    </>
  );
};

export default App;
