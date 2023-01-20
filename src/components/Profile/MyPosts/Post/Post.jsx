import styles from "./Post.module.css";

const Post = function (props) {
  return (
    


          <div className={styles.post} >
            <div className={styles.post__ava}></div>
            <div className={styles.post__content}>
    <div className={styles.post__text}>
      {props.text}
      </div>
    <div className={styles.post__like}>
     {props.like} Like
      </div>
              

              </div>
          </div>

    
  );
};
export default Post;
