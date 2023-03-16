import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';





const MyPosts = function (props) {
  let posts = props.posts.map((post) => (
    <Post text={post.message} like={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__title}>My posts</h2>
      <div className={styles.posts_new}>
        <div className={styles.posts__form}>
          <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            className={styles.posts__textarea}
            rows="4"
            placeholder="new post"
          />
          <button onClick={addPost} className={styles.posts__submit}>Добавить пост</button>
        </div>
      </div>
      <div className={styles.post__wrapper}>{posts}</div>
    </div>
  );
};
export default MyPosts;
