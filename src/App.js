import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";




class App extends Component {

/*constructor(props) {
    super(props)
    this.state = {count: 0}
};*/

  state = {
    count : 0
  };

incrementCount = () => {
  this.setState((state) => {
    // Important: read `state` instead of `this.state` when updating.
    console.log(state.count)
    return {count: state.count + 1}
  });
}

decrementCount = () => {
  this.setState((state) => {
    // Important: read `state` instead of `this.state` when updating.
    console.log(state.count)
    return {count: state.count - 1}
  });
}

//this.incrementCount();

render() {

  return (
    <div className="App">
      <Router>
        <Navigation cartItemCount={this.state.count}/>
        <Switch>
          <Route path="/ReactMultiPageWebsite/" exact component={() => <Home />} />
          <Route path="/ReactMultiPageWebsite/about" exact component={() => <About increase={this.incrementCount}/>} />
          <Route path="/ReactMultiPageWebsite/contact" exact component={() => <Contact decrease={this.decrementCount} />} />
        </Switch>
      </Router>
    </div>
  );
}
}
export default App;
