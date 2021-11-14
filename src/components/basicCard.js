import * as PropTypes from "prop-types";
import {formatSWAPIDataTable} from "../utils/swapi";
import {FlipCard} from "./UI/flipCard/flipCard";


function CloudImage({src, title}) {
    return <img
        src={src}
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://robohash.org/${title}?size=310x310`
        }}
    />
}

export const BasicCard = ({category, item}) => {
    const itemDataTable = formatSWAPIDataTable(item)
    let title = item.name !== undefined ? item.name : item.title;
    console.log(category)
    return (
        <FlipCard>
            <section>
                <div className={'overflow-hidden flex-grow'}>
                    <CloudImage
                        src={`https://res.cloudinary.com/di6qjuwyo/starwars/${category}/${item.id}.jpg`}
                        title={title}
                    />
                </div>
                {/*<img alt={`${film.title}`} src={`https://robohash.org/${film.title}?size=240x240`}/>*/}
                {/*https://res.cloudinary.com/di6qjuwyo/image/upload/v1636859976/starwars/heroes/1.jpg*/}
                <div className={'text-2xl text-center py-4 bg-black'}>{title}</div>
            </section>
            <section>
                {itemDataTable}
            </section>
        </FlipCard>
    )
}

BasicCard.propTypes = {
    category: PropTypes.string,
    item: PropTypes.object,
};
