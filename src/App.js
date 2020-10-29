import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/ReactMultiPageWebsite/" exact component={() => <Home />} />
          <Route path="/ReactMultiPageWebsite/about" exact component={() => <About />} />
          <Route path="/ReactMultiPageWebsite/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
