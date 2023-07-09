import React from 'react';
import Header from './header';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

describe(Header.name, function () {
    test('should match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="header"
      >
        <div
          class="flex container mx-auto"
        >
          <div
            class="w-48 text-center"
          >
            <a
              class=""
              href="/"
            >
              <img
                alt="StarWars Fandom"
                class="logo"
                src="star_wars_logo.svg"
              />
              <div
                class="logoTitle"
              >
                Fandom
              </div>
            </a>
          </div>
          <div
            class="flex-grow"
          />
          <nav>
            <a
              aria-current="page"
              class="active"
              href="/"
            >
              Home
            </a>
            <a
              class=""
              href="/films"
            >
              Films
            </a>
            <a
              class=""
              href="/characters"
            >
              Characters
            </a>
            <a
              class=""
              href="/starships"
            >
              Starships
            </a>
            <a
              class=""
              href="/vehicles"
            >
              Vehicles
            </a>
            <a
              class=""
              href="/planets"
            >
              Planets
            </a>
            <a
              class=""
              href="/species"
            >
              Species
            </a>
          </nav>
        </div>
      </header>
    `);
    });
});
