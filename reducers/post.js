export const initialState = {
    mainPosts: [{
        id: 1 ,
        User: {
            id:1,
            nickname: '주주주',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Image: [{
            src:'https://images.unsplash.com/photo-1632374151649-2cd26a7f04c2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        }, {
            src:'https://images.unsplash.com/photo-1632374151649-2cd26a7f04c2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        },{
            src:'https://images.unsplash.com/photo-1632374151649-2cd26a7f04c2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요',
        } ,{
            User: {
                nickname:'hero',
            },
            content: '얼른 사고싶어요~!'
        }]
    }],
    imagePaths:[],
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다',
    User: {
        id:1,
        nickname:'건정주,'
    },
    image:[],
    Comments:[],
};

const reducer = (state = initialState, action) => {
    switch (action. type) {
        case ADD_POST:
            return {
                ...state,
                mainPost: [dummyPost, ...state,mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
};

export default reducer;