import { render } from '@testing-library/react';
import { ArticleCard } from './articleCard';
import { StaticRouter } from 'react-router-dom/server';

const item = {
    MGLT: '60',
    cargo_capacity: '3000000',
    consumables: '1 year',
    cost_in_credits: '3500000',
    created: '2014-12-10T14:20:33.369000Z',
    crew: '30-165',
    edited: '2014-12-20T21:23:49.867000Z',
    films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/'
    ],
    hyperdrive_rating: '2.0',
    id: 2,
    length: '150',
    manufacturer: 'Corellian Engineering Corporation',
    max_atmosphering_speed: '950',
    model: 'CR90 corvette',
    name: 'CR90 corvette',
    passengers: '600',
    starship_class: 'corvette',
    url: 'https://swapi.dev/api/starships/2/',
    dbId: '-Moqce_zCBjBZflxVyxS'
};

describe('ArticleCard', () => {
    test('should render', () => {
        const { container, getByAltText } = render(
            <StaticRouter location="someLocation">
                <ArticleCard category={'d'} item={item} />
            </StaticRouter>
        );
        expect(container.firstChild).toMatchSnapshot();
        expect(getByAltText('CR90 corvette')).toBeInTheDocument();
    });
    test('should render with title as name', () => {
        const newItem = { ...item, title: 'TEST TITLE', name: undefined };
        const { container, getAllByText } = render(
            <StaticRouter location="someLocation">
                <ArticleCard category={'d'} item={newItem} />
            </StaticRouter>
        );
        expect(getAllByText('TEST TITLE')[0]).toBeInTheDocument();
    });
});
