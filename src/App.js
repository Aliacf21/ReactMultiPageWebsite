import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";

const default_count = 1

function load(){
  let count = localStorage.getItem('count')
  //Using && to condition on str_todos else null
  return (count && JSON.parse(count)) 
}

function store(count){
  localStorage.setItem('count',JSON.stringify(count))
}


class App extends Component {

  state = {
    count: default_count || load()
  };

 componentDidMount() {
    let loaded_count = load()
     this.setState(
    //Using || backup assignment
    {todoList: loaded_count || default_count
    }
  );
    }

incrementCount = () => {
  this.setState((state) => {
    return {count: (this.count + 1)}
  });

}

decrementCount = () => {
  let defualt_count = load()
  this.setState((state) => {
    return {count: this.count - 1}
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
