import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectotySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);