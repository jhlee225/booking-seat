import React from "react";
import "./css/App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { Header } from "./common/Header";
import { Menu } from "./features/menu/menu";
import { Login } from "./features/login/login";
import { SignUp } from "./features/signup/signup";
import { Booking } from "./features/booking/Booking";
import { Seats } from "./features/seat/seat";
import { Time } from "./features/time/time";
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
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/Time" component={Time}></Route>
          <Route exact path="/Book" component={Booking}></Route>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
