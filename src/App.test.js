import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

it("render App", () => {
  const appRendered = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(appRendered.container).toMatchSnapshot();
});
