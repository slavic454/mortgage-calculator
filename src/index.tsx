import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import Root from './Root';
import { GENERATE_SCHEDULE } from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = (state = {}, action: any) => {
    switch (action.type) {
        case GENERATE_SCHEDULE:
            return { ...action.payload }
        default:
            return state;
    }
}

const store = createStore(rootReducer, {});

export type RootState = ReturnType<typeof rootReducer>

render(
    <Provider store={store} >
        <Root />
    </Provider>,
    document.getElementById('root'));
