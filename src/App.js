import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Contact } from "./components";

//Default count for shopping cart 
const default_count = 0


//Load count from local storage
function load(){
  let count = localStorage.getItem('count')
  if (count < 0) {
    store(0)
  }
  return (count && JSON.parse(count)) 
}

//store count from local storage
function store(count){
  localStorage.setItem('count',JSON.stringify(count))
}

let load_count = load()

class App extends Component {

  state = {
    count: load_count || default_count
  };


//Function which increases count
incrementCount = () => {
  load_count = load_count + 1;
  //Store updated count in local storage
  store(load_count)
  console.log("There" + this.state.count)
  this.setState((state) => {
    return {count: (this.state.count + 1)}
  });

}

//Function which decreases count
decrementCount = () => {
  load_count = load_count-1;
  //Store updated count in local storage
  store(load_count)
  if (this.state.count == 0) {return }
  if (this.state.count < 0) { 
    this.setState((state) => {
    return {count: 0}
  });}

  this.setState((state) => {
    return {count: this.state.count - 1}
  });
}

//Route to the different pages
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
