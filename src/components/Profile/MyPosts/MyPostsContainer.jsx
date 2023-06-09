import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    currentPostText: state.profilePage.currentPostText
  }
}

let mapDispatchToProps = (dispatch) => {

  return {

    addPost: () => {
      dispatch(addPostActionCreator());
    },
    newPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }

  }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
