import * as PropTypes from "prop-types";
import {FlipCard} from "../UI/flipCard/flipCard";
import {formatSWAPIDataTable} from "../../utils/swapi";


export const FilmCard = ({film}) => {
    const filmDataTable = formatSWAPIDataTable(film)
    return (
        <FlipCard>
            <section>
                <img src={'https://res.cloudinary.com/di6qjuwyo/image/upload/v1636806662/starwars/films/1.jpg'}/>
                {/*<img alt={`${film.title}`} src={`https://robohash.org/${film.title}?size=240x240`}/>*/}
                <p className={'text-2xl text-center my-4'}>{film.title}</p>
            </section>
            <section>
                {filmDataTable}
            </section>
        </FlipCard>
    )
}

FilmCard.propTypes = {film: PropTypes.object};
