export function OpenPopUp() {
    return (dispatch) => {
        dispatch({type: 'OPEN_POPUP'})
    }
}

export function ClosePopUp() {
    return (dispatch) => {
        dispatch({type: 'CLOSE_POPUP'})
    }
}

