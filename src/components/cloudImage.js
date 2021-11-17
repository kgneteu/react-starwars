import jediLogo from '../assets/images/jedi.svg'

export function CloudImage({src, title, className}) {

    return (
        // <img src={jediLogo} className={'w-1/2 h-1/2 mx-auto'}/>
        <img
            className={className}
            src={src}
            onError={(e) => {
                e.target.onerror = null;
                //e.target.css.width=100;

                e.target.style.width = "50%";
                e.target.style.opacity = "0.8";
                e.target.style.transform = "translate(50%,50%)";
                e.target.src = jediLogo;
            }}
        />
//         <img
//             alt={''}
//             src={`https://robohash.org/${title}?size=310x310`}
//         />
    )
}
