 const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: "Hey you, yes you! Fuck off!", likesCount: 2},
    {id: 2, message: "and you fuck off too", likesCount: 3},
    {id: 3, message: "and you", likesCount: 0}
  ],
  currentPostText: ''
}


const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.currentPostText,
        likesCount: 0
      }
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.currentPostText = '';
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.currentPostText = action.text;
      return stateCopy;
    }
    default:
      console.log(`Sorry, we are out of ${action.type}.`);
      return state
  }

}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
  }
}
export default profileReducer;