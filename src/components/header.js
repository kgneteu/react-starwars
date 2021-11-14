import {Link} from "react-router-dom";

export function Header({title}) {
    return (
        <header className={'mb-64'}>
            <div className={'flex'}>
                <div className={'w-64 text-center'}>
                    <Link to={'/'}>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg'}
                             className={'w-64 z-10 relative bg-red-500'} alt={'Logo'}/>
                        <div className={'font-star-wars text-3xl opacity-90'}>Fandom</div>
                    </Link>
                </div>
                <div className={' flex-grow'}/>
                <nav className={'flex mt-12'}>
                    <Link className={'text-lg px-4'} to={'/'}>Home</Link>
                    <Link className={'text-lg px-4'} to={'/films'}>Films</Link>
                    <Link className={'text-lg px-4'} to={'/heroes'}>Characters</Link>
                    <Link className={'text-lg px-4'} to={'/starships'}>Starships </Link>
                    <Link className={'text-lg px-4'} to={'/vehicles'}>Vehicles </Link>
                    <Link className={'text-lg px-4'} to={'/planets'}>Planets</Link>
                    <Link className={'text-lg px-4'} to={'/species'}>Species </Link>
                </nav>
            </div>
            <h1 className={'absolute right-4 top-18'}>{title}</h1>
        </header>
    )
}
