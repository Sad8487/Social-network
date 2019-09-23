import React from 'react';
import style from './MyPosts.module.css';
import Post from "./post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost()
        props.dispatch( {type: "ADD-POST"} )
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;

        // props.updatePostText(text)
        let action = {
            type: "UPDATE-POST-TEXT",
            newPostText: text
        };

        props.dispatch( action )

    };

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts