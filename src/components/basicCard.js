import * as PropTypes from "prop-types";
import {formatSWAPIDataTable} from "../utils/swapi";
import {FlipCard} from "./UI/flipCard/flipCard";
import {Link} from "react-router-dom";
import {CloudImage} from "./cloudImage";
import NeonButton from "./neonButton";


// <img
//     src={src}
//     onError={(e) => {
//         e.target.onerror = null;
//         e.target.src = `https://robohash.org/${title}?size=310x310`
//     }}
// />

export const BasicCard = ({category, item}) => {
    const itemDataTable = formatSWAPIDataTable(item, 5, true)
    let title = item.name !== undefined ? item.name : item.title;
    //console.log(`https://res.cloudinary.com/di6qjuwyo/starwars/${category}/${item.id}.jpg`)
    return (
        <FlipCard>
            <section>
                <div className={'overflow-hidden flex-grow'}>
                    <CloudImage
                        category={category} imgId={item.id} preset={'card'}
                        title={title}
                    />
                </div>
                {/*<img src={`https://res.cloudinary.com/di6qjuwyo/starwars/${category}/${item.id}.jpg`}/>*/}
                {/*<img alt={`${film.title}`} src={`https://robohash.org/${film.title}?size=240x240`}/>*/}
                {/*https://res.cloudinary.com/di6qjuwyo/image/upload/v1636859976/starwars/heroes/1.jpg*/}
                <div className={'text-2xl text-center py-4 bg-black'}>{title}</div>
            </section>
            <section>
                <div className={'flex flex-col'}>
                    <div className={'flex items-center p-2 gap-4'}>
                        <CloudImage className={'w-24 h-24 rounded-full'} category={category} imgId={item.id} preset={'circle'}/>
                        <p className={'text-lg'}>{title}</p>
                    </div>
                    {itemDataTable}
                    <Link to={`/${category}/${item.id}`}><NeonButton className={'font-bold h-9 -mt-5'}>more</NeonButton></Link>
                </div>
            </section>
        </FlipCard>
    )
}

BasicCard.propTypes = {
    category: PropTypes.string,
    item: PropTypes.object,
};
