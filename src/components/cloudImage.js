import jediLogo from '../assets/images/jedi.svg'


export function CloudImage({category, preset, imgId, src, title, className}) {
    //todo alt image
    let transform = '';
    switch (preset) {
        case 'circle': {
            transform='/w_100,c_fill,ar_1:1,g_auto,r_max,bo_2px_solid_grey,b_rgb:262c35'
        }; break;
        case 'card': {
            transform='/w_350'
        };break;
        case 'page': {
            transform='/w_400'
        };break;
    }
    return (
        // <img src={jediLogo} className={'w-1/2 h-1/2 mx-auto'}/>
        <img
            className={className}
            src={`https://res.cloudinary.com/di6qjuwyo/image/upload${transform}/starwars/${category}/${imgId}.jpg`}
            style={{}}
            onError={(e) => {
                e.target.src = jediLogo;
                //e.target.className = 'transform translate-x-1/2 translate-y-1/2 w-1/2 h-1/2';
            }}
        />)
}
