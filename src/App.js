import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      );
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>NASA Astronomy Picture of the Day</h1>
      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
