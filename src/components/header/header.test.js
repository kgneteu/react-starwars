import React from "react";
import Header from "./header";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";

test("Should render", () => {
    const component = render(<MemoryRouter><Header/></MemoryRouter>)
    const el = component.getByTestId("starships");
    expect(el.textContent).toMatch("starships");
})
