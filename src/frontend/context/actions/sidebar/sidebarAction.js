import {
    SET_IS_TOGGLE,
    SET_IS_COUNT_NOTIFICATION,
    SET_ACTIVE_PARENT_PAGE_SIDEBAR
} from "../../constants/actionTypes/sidebarType";

const setIsToggle = (isToggle) => (dispatch) => {
    dispatch({
        type: SET_IS_TOGGLE,
        payload: isToggle,
    });
};

const setIsCountNotification = (isNotification) => (dispatch) => {
    dispatch({
        type: SET_IS_COUNT_NOTIFICATION,
        payload: isNotification,
    });
};
const setActiveParentPage = (parentPage) => (dispatch) => {
    dispatch({
      type: SET_ACTIVE_PARENT_PAGE_SIDEBAR,
      payload: parentPage,
    });
  };

export const sidebarAction = {
    setIsToggle,
    setIsCountNotification,
    setActiveParentPage

};
