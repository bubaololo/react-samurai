import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = function () {
let postData = [
  {id:1, message: 'Hey you, yes you! Fuck off!', likesCount: 2},
  {id:1, message: 'and you fuck off too', likesCount: 3},
  {id:1, message: 'and you', likesCount: 0},
]


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
        <Post text={postData[0].message} like={postData[0].likesCount} />
        <Post text={postData[1].message} like={postData[1].likesCount} />
        <Post text={postData[2].message} like={postData[2].likesCount} />
      </div>
    </div>
  );
};
export default MyPosts;
