import { CloudImage } from './cloudImage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('CloudImage', () => {
    test('should render with presets', () => {
        render(<CloudImage category={'fake'} preset={'circle'} imgId={5} title={'cloudCircle'} />);
        expect(screen.getByAltText<HTMLImageElement>('cloudCircle').src).toBe(
            `${process.env.REACT_APP_CLOUDINARY_URL}/w_96,c_fill,ar_1:1,g_auto,r_max/starwars/fake/5.jpg`
        );
        render(<CloudImage category={'fake'} preset={'card'} imgId={6} title={'cloudCard'} />);
        expect(screen.getByAltText<HTMLImageElement>('cloudCard').src).toBe(
            `${process.env.REACT_APP_CLOUDINARY_URL}/c_crop,c_fill,w_350,h_320,g_face/starwars/fake/6.jpg`
        );
        render(<CloudImage category={'fake'} preset={'page'} imgId={7} title={'cloudPage'} />);
        expect(screen.getByAltText<HTMLImageElement>('cloudPage').src).toBe(
            `${process.env.REACT_APP_CLOUDINARY_URL}/c_crop,w_500,c_fill,h_350,g_face/starwars/fake/7.jpg`
        );
        render(
            <CloudImage
                category={'fake'}
                preset={'invalidPreset'}
                imgId={8}
                title={'cloudInvalid'}
            />
        );
        const img = screen.getByAltText<HTMLImageElement>('cloudInvalid');
        expect(img.src).toBe(
            'https://res.cloudinary.com/di6qjuwyo/image/upload/starwars/fake/8.jpg'
        );
        fireEvent.error(img);
        expect(img.src).toContain('jedi.svg');
    });
});
