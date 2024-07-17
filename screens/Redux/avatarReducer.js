const initialState = {
    selectedAvatar: null,
};

const avatarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_AVATAR':
            return {
                ...state,
                selectedAvatar: action.payload,
            };
        default:
            return state;
    }
};

export default avatarReducer;
