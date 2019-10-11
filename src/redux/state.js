import ava1 from "../images/face1.jpg"
import ava2 from "../images/face2.jpg"
import ava3 from "../images/face3.jpg"
import ava4 from "../images/face4.jpg"


const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

// const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi! How are you?", likeCount: "20"},
                {id: 2, message: "It's my first post.", likeCount:"30"},
                {id: 3, message: "And it's my second post.", likeCount:"40"},
                {id: 3, message: "Good bye.", likeCount:"2"},
            ],
            newPostText: "Post text"
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Sveta"},
                {id: 2, name: "Sashulya"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Petya"},
                {id: 5, name: "Valera"}
            ],

            messages: [
                {id: 1, message: "Hello!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I'm fine! Thank you!"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            // newMessageText: ""
            newMessageBody: ""
        },

        sidebar: {
            friends: [
                {name: "Valera", avatar: ava1},
                {name: "Sveta", avatar: ava2},
                {name: "Sasha", avatar: ava3},
                {name: "Petya", avatar: ava4},
            ]
        }
    },
    _callSubscriber() {
        console.log("State was changed")
    },

    getState() {
        return this._state
    },              //метод, который меняет стейт
    subscribe(observer) {
        this._callSubscriber = observer;
    },     //метод, который сообщает, что стейт изменился

    dispatch(action) { // {type: "ADD-POST"}

        if(action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount:"0"
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);

        }
        // } else if(action.type === ADD_MESSAGE) {
        //     let newMessage = {
        //         id: 5,
        //         message: this._state.dialogsPage.newMessageText
        //     };
        //     this._state.dialogsPage.messages.push(newMessage);
        //     this._state.dialogsPage.newMessageText = "";
        //     this._callSubscriber(this._state)
        // } else if(action.type === UPDATE_MESSAGE_TEXT ) {
        //     this._state.dialogsPage.newMessageText = action.newMessageText;
        //     this._callSubscriber(this._state)
        // }

    }


};

//ActionCreators for MyPosts
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newPostText: text
    }
};

//ActionCreators for Dialogs
// export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} );
//
// export const updateMessageTextCreator = (messageText) => ( {type: UPDATE_MESSAGE_TEXT, newMessageText: messageText} );


//ActionCreators for Dialogs - 2
export const sendMessageCreator = () => ( {type: SEND_MESSAGE} );
export const updateNewMessageBodyCreator = (body) => ( {type: UPDATE_NEW_MESSAGE_BODY, body: body} )

window.store = store;

export default store;