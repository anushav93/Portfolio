import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import "./css/navbar.css";
import "./css/style.css";
import "./css/index.css";
import "./css/buttons.css";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import NotFound from "./components/notfound";
import IndexPage from "./components/index";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="">
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/index" component={IndexPage} />
            <Redirect from="/" exact to="/index" component={IndexPage} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
