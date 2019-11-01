import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";





const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                };

                let onPostChange = (text) => {
                    let action = updatePostTextActionCreator(text);
                    store.dispatch(action)

                };
                return <MyPosts updatePostText={onPostChange}
                         addPost={addPost}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;