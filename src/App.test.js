import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("snapshots", () => {
  it("App snapshot", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
