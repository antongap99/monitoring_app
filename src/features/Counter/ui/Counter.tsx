import { useDispatch, useSelector } from 'react-redux';
import { CounterActions } from 'features/Counter';
import { getCounterValue } from '../model/Selectors/getCounterValue/getCounterValue.ts';

export const Counter = () => {
    const counter = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => {
    //
        dispatch(CounterActions.increment());
    };

    const decrement = () => {
    //
        dispatch(CounterActions.decrement());
    };

    return (
        <div>
            <h1>
                Count:
                {counter}
            </h1>
            <button type="button" onClick={increment}>increment</button>
            <button type="button" onClick={decrement}>decrement</button>
        </div>
    );
};
