import { createSelector } from 'reselect';

const data = state => state.data;

const filter = createSelector(
    data,
    obj => obj.filter
);

const getList = createSelector(
    [data, filter],
    (obj, filter) => {
        let result = null;
        if (filter) {
            result = obj.list.filter(el => !el.checked);
            result = result.sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
        } else {
            result = obj.list.sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
        }

        return result;
    }
);

export default {
    filter,
    getList,
};
