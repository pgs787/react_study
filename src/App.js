import React from "react";
import About from "./Routes/About.js";
import Home from "./Routes/Home.js";
import Detail from "./Routes/Detail.js";
import Navigation from "./components/Navigation.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/movie-detail" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
