import {formatSWAPIDataTable} from "../../utils/swapi.utils";
import {FlipCard} from "../UI/flipCard/flipCard";
import {Link} from "react-router-dom";
import {CloudImage} from "../UI/cloudImage/cloudImage";
import React from "react";
import PropTypes from 'prop-types';

type BasicCardProps = {
    category: string,
    item: {
        name: string,
        title: string,
        id: number
    }
}

export function ArticleCard({category, item}: BasicCardProps) {
    const itemDataTable = formatSWAPIDataTable(item, 5, true)
    let title = item.name !== undefined ? item.name : item.title;
    //console.log(`https://res.cloudinary.com/di6qjuwyo/starwars/${category}/${item.id}.jpg`)
    return (
        <Link to={`/${category}/${item.id}`}>
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
                            <CloudImage className={'w-24 h-24 rounded-full'} category={category} imgId={item.id}
                                        preset={'circle'}/>
                            <p className={'text-lg'}>{title}</p>
                        </div>
                        <div className={'px-2'}>
                            {itemDataTable}
                        </div>
                    </div>
                </section>

            </FlipCard>
        </Link>
    )
}

ArticleCard.propTypes = {
    category: PropTypes.string,
    item: PropTypes.object,
};
