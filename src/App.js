import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    debugger;
    setData(result?.data);
  };
  return (
    <div className="App">
      {!data ? (
        <span data-testid="loading">Loading data...</span>
       ) : (
        <span data-testid="resolved">{data?.title}</span>
       )}
    </div>
  );
}

export default App;
