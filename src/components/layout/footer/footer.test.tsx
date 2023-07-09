import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe(Footer.name, () => {
    test('Should render author name', async () => {
        render(<Footer />);
        expect(screen.getByText(/Zdolski/i)).toBeInTheDocument();
    });

    test('Should be rendered as footer', async () => {
        const { container } = render(<Footer />);
        expect(container.querySelector('footer')).toBeInTheDocument();
    });

    test('should match snapshot', async () => {
        const { container } = render(<Footer />);
        expect(container.firstChild).toMatchInlineSnapshot(`
    <footer
      class="p-4 mt-24 bg-black text-center text-gray-400 opacity-75"
    >
      <p>
        (C) 2021 by Michał Zdolski
      </p>
    </footer>
  `);
    });
});
