import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../modules/auth/logic/slice'
import AppReducer from '../modules/app/logic/slice'
const store = configureStore({
    reducer: {
        app:AppReducer,
        auth:AuthReducer
    },
});



// Types
const { getState } = store;
const RootState = getState();
const AppDispatch = store.dispatch;


export {
    store,
    RootState,
    AppDispatch,
};
