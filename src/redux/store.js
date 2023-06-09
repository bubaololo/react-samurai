import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hey you, yes you! Fuck off!", likesCount: 2},
        {id: 2, message: "and you fuck off too", likesCount: 3},
        {id: 3, message: "and you", likesCount: 0}
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Вася",
          img: "https://scontent.ffru4-1.fna.fbcdn.net/v/t39.30808-1/303002383_411377711080218_218702371080380583_n.jpg?stp=c31.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=c6021c&_nc_ohc=FF8hltKRwaQAX8OXFt2&_nc_ht=scontent.ffru4-1.fna&oh=00_AfDvDFEwpXxaOT72QpgxDxzWWrW3ED34zSz7YroemMBc7A&oe=63FCF6FB"
        },
        {id: 2, name: "Петя", img: "https://static7.tgstat.ru/channels/_0/cd/cd2e71735529512ca2ccbab29bbb2b95.jpg"},
        {id: 3, name: "Коля", img: "https://www.meme-arsenal.com/memes/40ed3d6684da959bae9581741634eb8f.jpg"},
        {
          id: 4,
          name: "Рашид",
          img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 5,
          name: "Аюуюакр",
          img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        },
        {
          id: 6,
          name: "Евгений",
          img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        }
      ],
      messages: [
        {id: 1, message: "Ты кто такой"},
        {id: 2, message: "Не хочешь заработать?"},
        {id: 3, message: "Заработок на р2р"}
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('yo')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { // { type: 'ADD-POST' }

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this);


  }

}




window.store = store;
export default store;