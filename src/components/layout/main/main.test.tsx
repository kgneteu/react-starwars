import React from 'react';
import { render } from '@testing-library/react';
import { Main } from './main';

describe(Main.name, function () {
    test('should match snapshot', () => {
        const { container } = render(
            <Main>
                <p>test</p>
            </Main>
        );
        expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="flex flex-col items-stretch"
      >
        <p>
          test
        </p>
      </main>
    `);
    });
});
