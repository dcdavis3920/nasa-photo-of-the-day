import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TitleImage from "./components/TitleImage";
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setData(res.data);
        console.log(res);
      });
  }, []);
  return (
    <div className="App">
      <TitleImage data={data} />
    </div>
  );
}
export default App;
