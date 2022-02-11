const PopUpButton = (PopUpButton={}, action) => {
    switch(action.type) {
        case 'OPEN_POPUP':
            PopUpButton = true
            break;
        case 'CLOSE_POPUP':
            PopUpButton = false
            break;
        default:
            PopUpButton = false;
            break;
    }
    return PopUpButton;
}

export default PopUpButton;