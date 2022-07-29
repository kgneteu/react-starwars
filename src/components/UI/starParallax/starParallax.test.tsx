import StarParallax from "./starParallax";
import { render } from "@testing-library/react";

describe(StarParallax.name, function () {
  it("should match snapshot", function () {
    const { container } = render(<StarParallax />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sky"
      >
        <div
          class="stars"
        />
        <div
          class="stars2"
        />
        <div
          class="stars3"
        />
      </div>
    `);
  });
});
