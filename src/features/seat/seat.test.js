import React from "react";
import { render } from "@testing-library/react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store";
import { Seats } from "./seat";

it("render Seats", () => {
  const seatsRendered = render(
    <Provider store={store}>
      <Router>
        <Seats />
      </Router>
    </Provider>
  );
  expect(seatsRendered.container).toMatchSnapshot();
});
