import styles from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';


const Dialogs = function(props) {

  let dialogsElements = props.dialogs.map((dialog) => (
      <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} img={dialog.img}/>
  ));
  let messagesElements = props.messages.map((message) => (
      <Message message={message.message} key={message.id}/>
  ));

  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogsElements}</div>
        <div>
          <div className={styles.messages}>
            {messagesElements}

          </div>
          <MessageInput onAddMessage={props.onAddMessage} onMessageChange={props.onMessageChange} />
        </div>
      </div>
  );
};
export default Dialogs;
