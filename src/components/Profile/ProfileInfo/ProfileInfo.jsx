
import classes from "./ProfileInfo.module.css";

const ProfileInfo = function () {
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

    </div>
  );
};
export default ProfileInfo;
