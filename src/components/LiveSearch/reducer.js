import {
    FETCH_LIST_SUCCESS,
    LIST_IS_LOADING,
} from './constants';

const initialState = {
    list: [],
    isLoading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LIST_SUCCESS:
            // console.log(action.payload)
            return {
                ...state,
                list: action.payload,
            };

        case LIST_IS_LOADING:

            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
}