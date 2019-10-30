import React from 'react';
import style from './MyPosts.module.css';
import Post from "./post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";





const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    let onPostChange = (text) => {
        let action = updatePostTextActionCreator(text);
        props.store.dispatch(action)

    };

    return (
        <MyPosts updatePostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
};

export default MyPostsContainer;