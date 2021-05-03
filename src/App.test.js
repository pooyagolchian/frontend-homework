import React from "react"
import App from "./App"
import { shallow } from "enzyme"
import { Provider } from "react-redux"
import store from "./store"

describe("rendering components", () => {
  it("Renders App component without crashing", () => {
    const AppComponent = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive()
    expect(AppComponent)
  })

  it("snapshot", () => {
    const AppComponent = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive()
    expect(AppComponent).toMatchSnapshot()
  })
})

describe("App", () => {})
