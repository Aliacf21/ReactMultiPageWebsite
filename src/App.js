import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Original } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="https://aliacf21.github.io/ReactMultiPageWebsite/index.html/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
         <Route path="/original" exact component={() => <Original />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
