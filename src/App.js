import "./App.css";
import Home from "./Components/Pages/Home";
import Gallery from "./Components/Pages/Galley";
import About from "./Components/Pages/About";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="page">
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/about" component={About} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
