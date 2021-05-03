import React from "react";
import DropDown from "./Dropdown";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store";

describe("DropDown", () => {
  it("snapshot", () => {
    const DropDownComponent = shallow(
      <Provider store={store}>
        <DropDown />
      </Provider>
    ).dive();
    expect(DropDownComponent).toMatchSnapshot();
  });
});
