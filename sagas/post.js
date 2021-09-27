import axios from "axios";
import {all, delay, fork, put, takeLatest} from "redux-saga/effects";
import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST, ADD_POST_SUCCESS
} from "../reducers/post";

function addPostAPI(data) {
    return axios.post('/api/post', data)
}
function* addPost() {
    try{
        yield put({
            type: ADD_POST_REQUEST,
        });
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000)
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
    } catch(err) {
        yield put({
            type:ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}


function addCommentAPI(data) {
    return axios.post(`/api/post/${data.postId}/comment`,data)
}
function* addComment() {
    try{
        yield put({
            type: ADD_COMMENT_REQUEST,
        });
        yield delay(1000)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch(err) {
        yield put({
            type:ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost); // throwttle 초 => 초안에 한번만 실행
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment); // throwttle 초 => 초안에 한번만 실행
}

export default function* rootSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ]);
}