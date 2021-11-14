import * as PropTypes from "prop-types";
import {FlipCard} from "../UI/flipCard/flipCard";
import {formatSWAPIDataTable} from "../../utils/swapi";


export const HeroCard = ({hero}) => {
    const heroDataTable = formatSWAPIDataTable(hero)
    return (
        <FlipCard>
            <section>
                <img alt={`${hero.name}`} src={`https://robohash.org/${hero.name}?size=240x240`}/>
                <p className={'text-2xl text-center my-4'}>{hero.name}</p>
            </section>
            <section>
                {heroDataTable}
            </section>
        </FlipCard>
    )
}

HeroCard.propTypes = {hero: PropTypes.object};
