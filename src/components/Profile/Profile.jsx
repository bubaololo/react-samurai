import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = function(props) {
  return (
      <div>
        <ProfileInfo/>
        <MyPosts newPostText={props.profilePage.newPostText}
            posts={props.profilePage.posts}
            dispatch={props.dispatch}
        />
      </div>
  );
};
export default Profile;
