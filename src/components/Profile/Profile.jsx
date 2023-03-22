import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = function(props) {
  return (
      <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}
        />
      </div>
  );
};
export default Profile;
