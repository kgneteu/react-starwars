import * as PropTypes from 'prop-types';
import classes from './flipCard.module.scss';
import { ReactNode } from 'react';

export const FlipCard = ({ children }: { children: ReactNode }) => {
    return <article className={classes.flipCard}>{children}</article>;
};

FlipCard.propTypes = { children: PropTypes.node };
