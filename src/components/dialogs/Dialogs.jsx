import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    //--------------------------------------------   map   -------------------------------------------//
    // let dialogs = dialogs.map( (d)=> { return (
    //     <DialogItem id={d.id} name={d.name} />
    // )})
    let state = props.store.getState().dialogsPage;
    debugger
    let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.messages.map( m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;
    //--------------------------------------------   map   -------------------------------------------//

    // let newMessageElement = React.createRef();
    //
    // let addMessage = () => {
    //
    //     // props.addMessage()
    //     props.dispatch( addMessageActionCreator() )
    // };
    //
    // let onMessageChange = () => {
    //     let messageText = newMessageElement.current.value;
    //     // props.updateMessageText(messageText)
    //     // let action = {
    //     //     type: "UPDATE-MESSAGE-TEXT",
    //     //     newMessageText: messageText
    //     // };
    //
    //     props.dispatch( updateMessageTextCreator(messageText) )
    // };

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body))

    };


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                { dialogsElements }

            </div>

            <div className={style.messagesItems}>

                {/*{ messagesElements }*/}
                {/*<div className="newMessage">*/}
                    {/*<textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea>*/}
                    {/*<button onClick={addMessage}>Добавить</button>*/}
                {/*</div>*/}

                <div>{ messagesElements }</div>
                <div><textarea placeholder="Enter your message"
                               value={newMessageBody}
                               onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={ onSendMessageClick }>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;
