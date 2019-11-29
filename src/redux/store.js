import ava1 from "../images/face1.jpg"
import ava2 from "../images/face2.jpg"
import ava3 from "../images/face3.jpg"
import ava4 from "../images/face4.jpg"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



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
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Valera", avatar: ava1},
                {id: 2, name: "Sveta", avatar: ava2},
                {id: 3, name: "Sasha", avatar: ava3},
                {id: 5, name: "Petya", avatar: ava4},
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
        this._callSubscriber = observer;  //метод, который сообщает, что стейт изменился
    },

    dispatch(action) { // {type: "ADD-POST"}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};



window.store = store;

export default store;