import { Provider } from 'react-redux';
import store from './index';
import { ReactNode } from 'react';

const StoreProvider = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
