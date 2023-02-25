import styles from "./../Dialogs.module.css";
import React from 'react';
let newMessageElement = React.createRef();

let addMessage = () => {
  let text = newMessageElement.current.value;
  alert(text);
}

const MessageInput = function (props) {

return(

    <form className={styles.messageInputForm}>
          <textarea
              ref={newMessageElement}
              className={styles.messageTextarea}
              rows="1"
              placeholder="new message"
          ></textarea>
    <button onClick={addMessage} className={styles.messageSubmit}>Отправить собщение</button>
</form>


  )
}
  export default MessageInput;
