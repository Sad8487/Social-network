import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {
    //--------------------------------------------   map   -------------------------------------------//
    // let dialogs = dialogs.map( (d)=> { return (
    //     <DialogItem id={d.id} name={d.name} />
    // )})
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} />)
    //--------------------------------------------   map   -------------------------------------------//

    let newMessageElement = React.createRef();

    let addMessage = () => {
        // props.addMessage()
        props.dispatch( {type: "ADD-MESSAGE"} )
    };

    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        // props.updateMessageText(messageText)
        let action = {
            type: "UPDATE-MESSAGE-TEXT",
            newMessageText: messageText
        };

        props.dispatch( action )
    };


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                { dialogsElements }

            </div>

            <div className={style.messagesItems}>

                { messagesElements }

                <div className="newMessage">
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea>
                    <button onClick={addMessage}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
