import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";



const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.messages.map( m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    };

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);

    };


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                { dialogsElements }

            </div>

            <div className={style.messagesItems}>

                <div>{ messagesElements }</div>
                <div><textarea placeholder="Enter your message"
                               value={newMessageBody}
                               onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={ onSendMessageClick }>Send</button></div>
            </div>
        </div>
    )
};

export default Dialogs;
