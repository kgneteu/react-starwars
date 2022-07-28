import React from "react";
import Header from "./header";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

test("Should render", () => {
  const component = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).asFragment();
  expect(component.textContent).toMatchInlineSnapshot(
    `"FandomHomeFilmsCharactersStarshipsVehiclesPlanetsSpecies"`
  );
});
