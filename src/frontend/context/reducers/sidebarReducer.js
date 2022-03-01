import {
    SET_IS_TOGGLE,
    SET_IS_COUNT_NOTIFICATION,
  SET_ACTIVE_PARENT_PAGE_SIDEBAR
} from "../constants/actionTypes/sidebarType";

const sidebarReducer = (state, { payload, type }) => {
    switch (type) {
        case SET_ACTIVE_PARENT_PAGE_SIDEBAR:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    parentPage: payload,
                },
            };
        case SET_IS_TOGGLE:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    isToggle: payload
                }
            }
        case SET_IS_COUNT_NOTIFICATION:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    isCountNotification: payload
                }
            }
        default:
            return state
    }
}

export default sidebarReducer;