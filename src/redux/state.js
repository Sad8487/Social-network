import ava1 from "../images/face1.jpg"
import ava2 from "../images/face2.jpg"
import ava3 from "../images/face3.jpg"
import ava4 from "../images/face4.jpg"





let state = {

    profilePage: {
        posts: [
            {id: 1, message: "Hi! How are you?", likeCount: "20"},
            {id: 2, message: "It's my first post.", likeCount:"30"},
            {id: 3, message: "And it's my second post.", likeCount:"40"},
            {id: 3, message: "Good bye.", likeCount:"2"},
        ]
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
        ]
    },

    sidebar: {
        friends: [
            {name: "Sasha", avatar: ava1},
            {name: "Sveta", avatar: ava2},
            {name: "Valera", avatar: ava3},
            {name: "Petya", avatar: ava4},
        ]
    }
};

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 3,
        message: postMessage,
        likeCount:"0"
    };
    state.profilePage.posts.push(newPost)
};



export default state;