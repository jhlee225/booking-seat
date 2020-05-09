import React from "react";
import "./css/App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { Header } from "./common/Header";
import { Menu } from "./features/menu/menu";
import { Login } from "./features/login/login";
import { Seats } from "./features/seat/seat";
import { Footer } from "./common/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Router>
          <Route exact path="/" component={Menu}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Seat" component={Seats}></Route>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
