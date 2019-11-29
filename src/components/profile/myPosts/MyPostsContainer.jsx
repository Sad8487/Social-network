import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    // debugger
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

        addPost: () => {
            // debugger
            dispatch(addPostActionCreator())
            // dispatch({type: ADD_POST})
        },
        updatePostText: (text) => {
            let action = updatePostTextActionCreator(text);
            dispatch(action)
        }
    }
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer