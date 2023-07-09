import classes from './neonButton.module.scss';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
    small?: boolean;
    className: string;
    children: ReactNode;
};
const NeonButton = ({ small, className, children }: Props) => (
    <div className={clsx([classes.container, className])}>
        <div className={small ? classes.smallButton : classes.button}>{children}</div>
    </div>
);

NeonButton.defaultProps = { className: '' };

export default NeonButton;
