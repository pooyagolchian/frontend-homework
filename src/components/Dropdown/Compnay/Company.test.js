import React from "react";
import Company from "./Company";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store";

describe("Render Company", () => {
  it("Renders App component without crashing", () => {
    const CompanyComponent = shallow(
      <Provider store={store}>
        <Company />
      </Provider>
    ).dive();
  });
});

describe("Company", () => {
  it("snapshot", () => {
    const CompanyComponent = shallow(
      <Provider store={store}>
        <Company />
      </Provider>
    ).dive();
    expect(CompanyComponent).toMatchSnapshot();
  });
});
