import { render } from '@testing-library/react';
import { ArticleCard } from './articleCard';

type ArticleCardProps = {
    category: string;
    item: {
        name: string;
        title: string;
        id: number;
        dbId: string;
    };
    animationClass?: string;
};

describe('ArticleCard', () => {
    test('should ', () => {
        render(<ArticleCard category={'d'} />);
    });
});
