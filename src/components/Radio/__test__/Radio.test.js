import React from "react"
import renderer from "react-test-renderer"
import Radio from "../Radio"

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Radio />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
