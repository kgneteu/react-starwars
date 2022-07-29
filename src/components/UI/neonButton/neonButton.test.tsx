import { render } from "@testing-library/react";
import NeonButton from "./neonButton";

describe(NeonButton.name, function () {
  test("Should render", () => {
    const { container } = render(
      <NeonButton className={"w-60"}>more</NeonButton>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="container w-60"
      >
        <div
          class="button"
        >
          more
        </div>
      </div>
    `);
  });
});
