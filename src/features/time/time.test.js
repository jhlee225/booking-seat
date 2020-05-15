import React from "react";
import { render } from "@testing-library/react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store";
import { Time } from "./time";

it("render Seats", () => {
  const seatsRendered = render(
    <Provider store={store}>
      <Router>
        <Time />
      </Router>
    </Provider>
  );
  expect(seatsRendered.container).toMatchSnapshot();
});

describe("make graph", () => {
  const seatsRendered = render(
    <Provider store={store}>
      <Router>
        <Time />
      </Router>
    </Provider>
  );
});
