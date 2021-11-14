import * as PropTypes from "prop-types";
import {formatSWAPIDataTable} from "../utils/swapi";
import {FlipCard} from "./UI/flipCard/flipCard";


export const BasicCard = ({title, category, item }) => {
    const itemDataTable = formatSWAPIDataTable(item)
    return (
        <FlipCard>
            <section>
                <img src={'https://res.cloudinary.com/di6qjuwyo/image/upload/v1636806662/starwars/films/1.jpg'}/>
                {/*<img alt={`${film.title}`} src={`https://robohash.org/${film.title}?size=240x240`}/>*/}
                <p className={'text-2xl text-center my-4'}>{title}</p>
            </section>
            <section>
                {itemDataTable}
            </section>
        </FlipCard>
    )
}

BasicCard.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    item: PropTypes.object,
};
