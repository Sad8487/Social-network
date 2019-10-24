import ava1 from "../images/face1.jpg"
import ava2 from "../images/face2.jpg"
import ava3 from "../images/face3.jpg"
import ava4 from "../images/face4.jpg"


let initialState = {
    friends: [
        {name: "Valera", avatar: ava1},
        {name: "Sveta", avatar: ava2},
        {name: "Sasha", avatar: ava3},
        {name: "Petya", avatar: ava4},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state
};

export default sidebarReducer;