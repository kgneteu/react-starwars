import * as PropTypes from "prop-types";

export const Layout = ({children}) => (
    <main className={'flex flex-col items-center'}>
        {children}
    </main>
)

Layout.propTypes = {children: PropTypes.node};
