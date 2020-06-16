import { useState } from "react";

function useCustomCounter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
}