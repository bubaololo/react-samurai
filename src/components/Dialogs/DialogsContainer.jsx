import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';


const DialogsContainer = function(props) {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onMessageChange = (text) => {

    props.store.dispatch(updateNewMessageBodyCreator(text))
  }


  return (<Dialogs dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      onAddMessage={addMessage} onMessageChange={onMessageChange}  />)
};
export default DialogsContainer;
