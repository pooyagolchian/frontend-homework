import React from "react";
import DropdownFixItem from "./DropdownFixItem";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("rendering <DropdownFixItem />", () => {
  it("renders DropdownFixItem component without crashing", () => {
    shallow(<DropdownFixItem />);
  });
});

describe("snapshots", () => {
  it("DropdownFixItem snapshot", () => {
    const dropDowmFixItemTree = shallow(<DropdownFixItem />);
    expect(toJson(dropDowmFixItemTree)).toMatchSnapshot();
  });
});
