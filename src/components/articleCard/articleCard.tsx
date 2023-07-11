import { formatSWAPIDataTable } from '../../utils/swapi.utils';
import { FlipCard } from '../UI/flipCard/flipCard';
import { Link } from 'react-router-dom';
import { CloudImage } from '../UI/cloudImage/cloudImage';
import React, { forwardRef } from 'react';

export type ArticleCardProps = {
    category: string;
    item: {
        name?: string;
        title?: string;
        id: number;
        dbId: string;
        [key: string]: string | number | undefined | string[];
    };
    animationClass?: string;
};

export const ArticleCard = forwardRef<HTMLAnchorElement, ArticleCardProps>(
    ({ category, item, animationClass = '' }: ArticleCardProps, ref) => {
        const itemDataTable = formatSWAPIDataTable(item, 5, true);
        const title = item.name ? item.name : item.title;
        return (
            <Link to={`/${category}/${item.id}`} ref={ref} className={animationClass}>
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
                        <div className={'text-2xl text-center py-4 bg-black'}>{title}</div>
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
    }
);

ArticleCard.displayName = 'ArticleCard';
//
// ArticleCard.propTypes = {
//     category: PropTypes.string,
//     item: PropTypes.object,
//     animationClass: PropTypes.string
// };
