import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "./store";

describe("rendering components", () => {
  const AppComponent = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  ).dive();
  expect(AppComponent);
});

describe("App", () => {
  it("snapshot", () => {
    const AppComponent = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive();
    expect(AppComponent).toMatchSnapshot();
  });
});
