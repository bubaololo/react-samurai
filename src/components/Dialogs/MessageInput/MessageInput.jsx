import styles from "./../Dialogs.module.css";
import React from 'react';






const MessageInput = function (props) {

  let onAddMessage = () => {
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
    <button onClick={onAddMessage} className={styles.messageSubmit}>Отправить сообщение</button>
</div>


  )
}
  export default MessageInput;
