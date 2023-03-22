import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';


const MyPosts = function (props) {
  let posts = props.posts.map((post) => (
    <Post text={post.message} like={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
          <button onClick={onAddPost} className={styles.posts__submit}>Добавить пост</button>
        </div>
      </div>
      <div className={styles.post__wrapper}>{posts}</div>
    </div>
  );
};
export default MyPosts;
