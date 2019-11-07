import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";


export default getLogs = () => async dispatch => {
 try {
     setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
     dispatch({
        type: GET_LOGS,
        payload: data
     });
 } catch (error) {
     dispatch({
         type: LOGS_ERROR,
         payload: error.response.data
     });
 }
}
//set loading to true

export default setLoading = () => {
    return {
        type: SET_LOADING
    }
}