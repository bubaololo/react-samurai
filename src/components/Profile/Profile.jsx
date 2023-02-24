import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = function (props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={ props.state.posts } />
    </div>
  );
};
export default Profile;
