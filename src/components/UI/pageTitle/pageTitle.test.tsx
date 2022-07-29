import { render } from "@testing-library/react";
import React from "react";
import { PageTitle } from "./pageTitle";

describe(PageTitle.name, function () {
  test("should match snapshot", () => {
    const { container } = render(<PageTitle title={"test"} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h1
        class="absolute right-4 top-36 opacity-75 max-w-3/4 text-right leading-none lowercase"
      >
        test
      </h1>
    `);
  });
});
