import * as PropTypes from "prop-types";

export const Main = ({children}) => (
    <main className={'flex flex-col items-stretch'}>
        {children}
    </main>
)

Main.propTypes = {children: PropTypes.node};
