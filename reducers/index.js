import { HYDRATE} from "next-redux-wrapper";

const initialState = {
user: {
    setIsLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
    },
    post: {
        mainPosts: [],
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG-IN',
        data,
    }
}

export const logoutAction = (data) => {
    return {
        type: 'LOG-OUT',
        data,
    }
}

const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
}
changeNickname('geonjeong');
store.dispatch(changeNickname('JGJ'))

// (이전상태, 액션 => 다음상태
const rootReducer = (state, action) => {
    switch (action, type) {
        case HYDRATE:
            console.log('HYDRATE', action)
            return { ...state, ...action.payload};
        case 'LOG-IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }
        case 'LOG-OUT':
        return {
            ...state,
            user: {
                ...state.user,
                isLoggedIn: false,
                user: null,
            }
        }
    }
};

export default rootReducer;