import styles from "./../Dialogs.module.css";
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/dialogs-reducer';





const MessageInput = function (props) {

  let addMessage = () => {
    props.onAddMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value;

    props.onMessageChange(text);
  }


return(

    <div className={styles.messageInputForm}>
          <textarea
              onChange={onMessageChange}
              className={styles.messageTextarea}
              rows="5"
              placeholder="new message"
          ></textarea>
    <button onClick={addMessage} className={styles.messageSubmit}>Отправить собщение</button>
</div>


  )
}
  export default MessageInput;
