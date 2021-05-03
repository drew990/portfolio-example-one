import "./App.css";
import Home from "./Components/Pages/Home";
import Gallery from "./Components/Pages/Galley";
import About from "./Components/Pages/About";
import { Route, Switch } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <div className="page">
      {loading ? (
        <PropagateLoader size={15} color={"#000"} loading={loading} />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/about" component={About} />
        </Switch>
      )}
    </div>
  );
}

export default App;
