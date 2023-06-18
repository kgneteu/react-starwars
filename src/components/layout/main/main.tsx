import * as PropTypes from "prop-types";
import React, {ReactNode} from "react";

export const Main = ({children}: { children: ReactNode }) => (
    <main className={'flex flex-col items-stretch'}>
        {children}
    </main>
)

Main.propTypes = {children: PropTypes.node};
