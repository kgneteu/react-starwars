import loaderImage from './../../../assets/images/loader.png'

export const Loader = () => (
    <div className={'text-center w-auto opacity-0 animate-delay-appear'}>
        <div className={'w-auto inline-block overflow-hidden'}>
            <img src={loaderImage} className={'animate-spin-slow inline w-24'} alt={'Loading...'}/>
            <p className={'inline uppercase animate-pulse-slow'}>Loading...</p>
        </div>
    </div>
);

Loader.propTypes = {};

