import {
    SUCCESS_LOADING,
} from "../../constants/actionTypes/appTypes";
import { callAuthorizationApi } from "../../../utils/apiCaller";

const getApplicationsByUser = async (dispatch) => {
    try {
        var response = await callAuthorizationApi(
            `alcare/user/me/applications`,
            "GET",
            null
        );
        if (response) {
            dispatch({
                type: SUCCESS_LOADING,
                payload: response.data.result
            })
        }
    } catch (error) {
    }
}

export const appAction = {
    getApplicationsByUser
};