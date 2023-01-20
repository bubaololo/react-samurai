import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = function () {
  return (
    <div>
      <div className={classes.heroImg}></div>
      <div className={classes.person}>
        <div className={classes.person__ava}></div>
        <div className={classes.person__info}>
          <div className={classes.person__name}>Бубашвили Георг Маркелович</div>
          <div className={classes.person__desc}>пыхолог</div>
        </div>
      </div>
    <MyPosts />
    </div>
  );
};
export default Profile;
