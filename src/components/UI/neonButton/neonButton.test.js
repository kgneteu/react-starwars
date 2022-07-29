import { render } from "@testing-library/react";
import NeonButton from "./neonButton";

describe('', function () {
  test("Should render", () => {
    const el = render(
        <NeonButton className={"w-60"}>more</NeonButton>
    ).asFragment();
    expect(el).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="container w-60"
      >
        <div
          class="button"
        >
          more
        </div>
      </div>
    </DocumentFragment>
  `);
  });

});
