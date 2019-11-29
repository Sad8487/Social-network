import React from 'react';
import style from './MyPosts.module.css';
import Post from "./post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";





const MyPosts = (props) => {
    // debugger

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        // debugger
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);


    };

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange }
                              value={props.newPostText}
                              ref={newPostElement}
                              placeholder={'Post text'}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts