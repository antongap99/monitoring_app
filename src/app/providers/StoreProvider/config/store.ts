import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'features/Counter';

const rootReducer = combineReducers({
    counter: CounterReducer,
});

export function createReduxStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: true, // TODO в проде нужно убрать
    });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>
