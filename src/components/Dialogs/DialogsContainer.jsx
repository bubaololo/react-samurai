import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';




let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(sendMessageCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageBodyCreator(text));
    }

  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
