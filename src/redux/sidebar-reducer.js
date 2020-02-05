import ava1 from "../../src/assets/images/face1.jpg"
import ava2 from "../../src/assets/images/face2.jpg"
import ava3 from "../../src/assets/images/face3.jpg"
import ava4 from "../../src/assets/images/face4.jpg"


let initialState = {
    friends: [
        {id: 1, name: "Valera", avatar: ava1},
        {id: 2, name: "Sveta", avatar: ava2},
        {id: 3, name: "Sasha", avatar: ava3},
        {id: 5, name: "Petya", avatar: ava4},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state
};

export default sidebarReducer;