import React from "react";
import Company from "./Company";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

test("Company snapshot", () => {
  const component = renderer.create(<Company />);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
