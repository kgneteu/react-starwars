import jediLogo from '../assets/images/jedi.svg'


export function CloudImage({category, preset, imgId, title, className}) {
    //todo alt image
    let transform;
    switch (preset) {
        case 'circle':
            transform = '/w_100,c_fill,ar_1:1,g_auto,r_max,bo_2px_solid_grey,b_rgb:262c35';
            break;
        case 'card':
            transform = '/w_350';
            break;
        case 'page':
            transform = '';
            break;
        default:
            transform = '';
    }
    return (
        <img
            className={className}
            title={title}
            alt={title}
            src={`${process.env.REACT_APP_CLOUDINARY_URL}${transform}/starwars/${category}/${imgId}.jpg`}
            style={{}}
            onError={(e) => {
                e.target.src = jediLogo;
                //e.target.className = 'transform translate-x-1/2 translate-y-1/2 w-1/2 h-1/2';
            }}
        />)
}
