import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    //--------------------------------------------   map   -------------------------------------------//
    // let dialogs = dialogs.map( (d)=> { return (
    //     <DialogItem id={d.id} name={d.name} />
    // )})
    let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = props.state.messages.map( m => <Message message={m.message} />)
    //--------------------------------------------   map   -------------------------------------------//

    let newMessageElement = React.createRef();

    let addNewMassage = () => {
        let newMessage = newMessageElement.current.value;
        alert(newMessage);
        newMessageElement.current.value = "";
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                { dialogsElements }

            </div>

            <div className={style.messagesItems}>

                { messagesElements }

                <div className="newMessage">
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addNewMassage}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
