import { formatSWAPIDataTable } from '../../utils/swapi.utils';
import { FlipCard } from '../UI/flipCard/flipCard';
import { Link } from 'react-router-dom';
import { CloudImage } from '../UI/cloudImage/cloudImage';
import React, { forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

type ArticleCardProps = {
    category: string;
    item: {
        name: string;
        title: string;
        id: number;
        dbId: string;
    };
    animationClass?: string;
};

export const FlyInArticleCard = ({
    category,
    item,
    animationClass = 'my-node'
}: ArticleCardProps) => {
    return <ArticleCard category={category} item={item} animationClass={animationClass} />;
};

export const ArticleCard = forwardRef<HTMLAnchorElement, ArticleCardProps>(
    ({ category, item, animationClass = '' }: ArticleCardProps, ref) => {
        const itemDataTable = formatSWAPIDataTable(item, 5, true);
        const title = item.name !== undefined ? item.name : item.title;
        const linkRef = useRef<HTMLAnchorElement>(null);
        // console.log('ref', ref);
        return (
            <CSSTransition
                classNames={animationClass}
                timeout={200}
                in={true}
                nodeRef={linkRef}
                appear={true}
                unmountOnExit>
                {(state) => {
                    // console.log('anim ', state);
                    return (
                        <Link
                            to={`/${category}/${item.id}`}
                            ref={linkRef}
                            className={animationClass}>
                            <FlipCard>
                                <section>
                                    <div className={'overflow-hidden flex-grow'}>
                                        <CloudImage
                                            category={category}
                                            imgId={item.id}
                                            preset={'card'}
                                            title={title}
                                        />
                                    </div>
                                    <div className={'text-2xl text-center py-4 bg-black'}>
                                        {title}
                                    </div>
                                </section>
                                <section>
                                    <div className={'flex flex-col'}>
                                        <div className={'flex items-center p-2 gap-4'}>
                                            <CloudImage
                                                className={'w-24 h-24 rounded-full'}
                                                category={category}
                                                imgId={item.id}
                                                preset={'circle'}
                                            />
                                            <p className={'text-lg'}>{title}</p>
                                        </div>
                                        <div className={'px-2'}>{itemDataTable}</div>
                                    </div>
                                </section>
                            </FlipCard>
                        </Link>
                    );
                }}
            </CSSTransition>
        );
    }
);

ArticleCard.displayName = 'ArticleCard';
//
// ArticleCard.propTypes = {
//     category: PropTypes.string,
//     item: PropTypes.object,
//     animationClass: PropTypes.string
// };
