import jediLogo from '../assets/images/jedi.svg'


export function CloudImage({src, title, className}) {
        //todo klasa zostaje ustawiona w onerror
        return (
            // <img src={jediLogo} className={'w-1/2 h-1/2 mx-auto'}/>
            <img
                className={className}
                src={src}
                style={{}}
                onError={(e) => {
                    e.target.src=jediLogo;
                    //e.target.className = 'transform translate-x-1/2 translate-y-1/2 w-1/2 h-1/2';
                }}
            />)
}
