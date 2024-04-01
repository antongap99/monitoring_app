import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'features/Counter';
import { getCounter } from '../getCounter/getCounter.ts';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
