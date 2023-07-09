import {formatSWAPIDataTable} from "../../utils/swapi.utils";
import {FlipCard} from "../UI/flipCard/flipCard";
import {Link} from "react-router-dom";
import {CloudImage} from "../UI/cloudImage/cloudImage";
import React, {useRef} from "react";
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";

type BasicCardProps = {
    category: string,
    item: {
        name: string,
        title: string,
        id: number,
        dbId: string
    }
}

export function ArticleCard({category, item}: BasicCardProps) {
    const itemDataTable = formatSWAPIDataTable(item, 5, true)
    let title = item.name !== undefined ? item.name : item.title;
    const ref = useRef<HTMLAnchorElement>(null);

    return (

            <CSSTransition classNames="my-node" timeout={200} in={true} nodeRef={ref} appear={true} unmountOnExit>
                {(state) => {
                    console.log('ss ', state)
                    return (
                <Link to={`/${category}/${item.id}`} ref={ref} className={'my-node'}>
                    <FlipCard>
                        <section>
                            <div className={'overflow-hidden flex-grow'}>
                                <CloudImage
                                    category={category} imgId={item.id} preset={'card'}
                                    title={title}
                                />
                            </div>
                            <div className={'text-2xl text-center py-4 bg-black'}>{title}</div>
                        </section>
                        <section>
                            <div className={'flex flex-col'}>
                                <div className={'flex items-center p-2 gap-4'}>
                                    <CloudImage className={'w-24 h-24 rounded-full'} category={category}
                                                imgId={item.id}
                                                preset={'circle'}/>
                                    <p className={'text-lg'}>{title}</p>
                                </div>
                                <div className={'px-2'}>
                                    {itemDataTable}
                                </div>
                            </div>
                        </section>

                    </FlipCard>
                </Link>)}}
            </CSSTransition>
    )
}

ArticleCard.propTypes = {
    category: PropTypes.string,
    item: PropTypes.object,
};
