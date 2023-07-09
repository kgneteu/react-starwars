import * as PropTypes from 'prop-types';

export const PageTitle = ({ title }: { title: string }) => (
    <h1
        className={'absolute right-4 top-36 opacity-75 max-w-3/4 text-right leading-none lowercase'}
    >
        {title}
    </h1>
);

PageTitle.propTypes = { title: PropTypes.string };
