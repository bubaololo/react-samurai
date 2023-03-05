import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from '../../redux/state';


const Profile = function (props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts newPostText = {props.profilePage.newPostText} posts={ props.profilePage.posts } addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  );
};
export default Profile;
