import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
const MyPosts = function (props) {
  let posts = props.posts.map((post) => (
    <Post text={post.message} like={post.likesCount} />
  ));


  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }


  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__title}>My posts</h2>
      <div className={styles.posts_new}>
        <form className={styles.posts__form}>
          <textarea
              ref={newPostElement}
            className={styles.posts__textarea}
            name=""
            id=""
            rows="4"
            placeholder="new post"
          ></textarea>
          <button onClick={addPost} className={styles.posts__submit}>Добавить пост</button>
        </form>
      </div>
      <div className={styles.post__wrapper}>{posts}</div>
    </div>
  );
};
export default MyPosts;
