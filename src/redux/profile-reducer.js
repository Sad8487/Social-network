const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


let initialState = {
    posts: [
        {id: 1, message: "Hi! How are you?", likeCount: "20"},
        {id: 2, message: "It's my first post.", likeCount:"30"},
        {id: 3, message: "And it's my second post.", likeCount:"40"},
        {id: 3, message: "Good bye.", likeCount:"2"},
    ],
    newPostText: "Post text",
    profile: null
};


const profileReducer = (state = initialState, action) => {
    // debugger
    switch(action.type) {
        case ADD_POST: {
            // debugger;
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: "0"
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText,
            };
        }
        case SET_USER_PROFILE: { //если придет экшн с таким типом
            return { //то вернем
                ...state, //копию стейта
                profile: action.profile, //в котором поменяем профайл на профайл, кот сидит в экшене
            };
        }
        default:
            return state;
    }
};


//ActionCreators
export const addPostActionCreator = () => ( {type: ADD_POST} );
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );
export const updatePostTextActionCreator = (text) => ( {type: UPDATE_POST_TEXT, newPostText: text} );

export default profileReducer;