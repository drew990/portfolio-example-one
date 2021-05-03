import "./App.css";
import Home from "./Components/Pages/Home";
import Gallery from "./Components/Pages/Galley";
import About from "./Components/Pages/About";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
