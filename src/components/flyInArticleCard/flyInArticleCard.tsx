import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ArticleCard, ArticleCardProps } from '../articleCard/articleCard';

export const FlyInArticleCard = ({
    category,
    item,
    animationClass = 'my-node'
}: ArticleCardProps) => {
    const linkRef = useRef<HTMLAnchorElement>(null);

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
                    <ArticleCard
                        category={category}
                        item={item}
                        animationClass={animationClass}
                        ref={linkRef}
                    />
                );
            }}
        </CSSTransition>
    );
};
