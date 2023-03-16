import styles from "./../Dialogs.module.css";
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/state';

let newMessageElement = React.createRef();



const MessageInput = function (props) {
  let addMessage = () => {
props.dispatch(sendMessageCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;

props.dispatch(updateNewMessageBodyCreator(text))
  }
  

return(

    <div className={styles.messageInputForm}>
          <textarea
              onChange={onMessageChange}
              ref={newMessageElement}
              className={styles.messageTextarea}
              rows="5"
              placeholder="new message"
          ></textarea>
    <button onClick={addMessage} className={styles.messageSubmit}>Отправить собщение</button>
</div>


  )
}
  export default MessageInput;
