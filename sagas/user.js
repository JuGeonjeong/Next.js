import {all, delay, fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";

import { LOG_IN_SUCCESS,LOG_IN_FAILURE,LOG_IN_REQUEST,
         LOG_OUT_REQUEST,LOG_OUT_FAILURE,LOG_OUT_SUCCESS,
         SIGN_UP_FAILURE,SIGN_UP_REQUEST,SIGN_UP_SUCCESS
} from "../reducers/user";

function logInAPI() {
    return axios.post('/api/login', data)
}

function* logIn(action) {
            try{
                yield delay(1000);
                yield put({
                    type: 'LOG_IN_SUCCESS',
                    data: action.data,
                });
            } catch(err) {
                yield put({
                    type:'LOG_IN_FAILURE',
                    data: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut(action) {
    try{
        yield put({
            type: LOG_OUT_REQUEST,
        });
        // const result = yield call(logOutAPI) //fork는 비동기 함수호출, 응답을 기다리지 않음.
        yield delay(1000)
        yield put({
            type: LOG_OUT_SUCCESS,
            data: action.data,
        });
    } catch(err) {
        yield put({
            type: LOG_OUT_FAILURE,
            data: err.response.data,
        });
    }
}

function signUpAPI() {
    return axios.post('/api/signUp')
}

function* signUpp() {
    try{
        yield delay(1000);
        yield put({
            type: 'SIGN_UP_SUCCESS',
        });
    } catch(err) {
        yield put({
            type:'SIGN_UP_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn); // takeLatest 요청은 여러번이지만 서버에서 한번만 응답옴 됨
}                                              // => 서버에서 한번의 값만 관리하도록 설정해야 함

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_FAILURE, SignUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}

