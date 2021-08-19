import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" exact component={About} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/resume" exact component={Resume} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
