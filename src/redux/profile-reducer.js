const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";


let initialState = {
    posts: [
        {id: 1, message: "Hi! How are you?", likeCount: "20"},
        {id: 2, message: "It's my first post.", likeCount:"30"},
        {id: 3, message: "And it's my second post.", likeCount:"40"},
        {id: 3, message: "Good bye.", likeCount:"2"},
    ],
    newPostText: "Post text"
};


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount:"0"
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};


//ActionCreators
export const addPostActionCreator = () => ( {type: ADD_POST} );
export const updatePostTextActionCreator = (text) => ( {type: UPDATE_POST_TEXT, newPostText: text} );

export default profileReducer;