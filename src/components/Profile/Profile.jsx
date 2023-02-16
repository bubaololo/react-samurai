import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = function () {
  return (
    <div>
<ProfileInfo />
      <MyPosts />
    </div>
  );
};
export default Profile;
