import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader', () => {
    test('should display', () => {
        render(<Loader />);
        screen.getByAltText('Loading...');
    });
});
