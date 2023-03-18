
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {addPost, updateNewPostText} from './redux/state';
const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerenderEntireTree = (store) => {
   debugger
  root.render(
      <React.StrictMode>
        {/*<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>*/}

        <App store={store}/>
      </React.StrictMode>
  );
}
rerenderEntireTree(store);
store.subscribe(() => {
  let state = store;
  rerenderEntireTree(state);
});
