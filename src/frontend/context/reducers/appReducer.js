import {
    SUCCESS_LOADING,
} from "../constants/actionTypes/appTypes";

const appReducer = (state, { payload, type }) => {
    switch (type) {
        case SUCCESS_LOADING:
            return {
                ...state,
                app: {
                    ...state.app,
                    applications: payload
                }
            }

        default:
            return state
    }
}

export default appReducer;