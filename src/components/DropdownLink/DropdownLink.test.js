import React from "react";
import DropdownLink from "./DropdownLink";
import { shallow } from "enzyme";

describe("snapshots", () => {
  it("DropdownLink snapshot", () => {
    const DropdownLinkTree = shallow(<DropdownLink />).dive();
    expect(toJson(DropdownLinkTree)).toMatchSnapshot();
  });
});
