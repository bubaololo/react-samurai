import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = function () {
  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__title}>My posts</h2>
      <div className={styles.posts_new}>
        <form className={styles.posts__form}>
          <textarea
            className={styles.posts__textarea}
            name=""
            id=""
            rows="4"
            placeholder="new post"
          ></textarea>
          <input className={styles.posts__submit} type="submit" />
        </form>
      </div>
      <div className={styles.post__wrapper}>
        <Post text='Hey you, yes you! Fuck off!' like='2' />
        <Post text='and you fuck off too' like='3' />
        <Post text='and you' />
      </div>
    </div>
  );
};
export default MyPosts;
