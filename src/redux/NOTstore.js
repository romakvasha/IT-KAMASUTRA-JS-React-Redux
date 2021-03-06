import messagesReducer from "./messages-reducer";
import navReducer from "./navPage-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _data: {
    profilePage: {
      postData: [
        { id: 1, message: "Привіт, як справи?", likesCount: 12 },
        { id: 2, message: "Це мій перший пост", likesCount: 20 },
        { id: 3, message: "Це мій другий пост", likesCount: 30 },
      ],
      newPostText: "",
    },
    messagesPage: {
      messages: [{ id: 1, message: "Привіт" }],
      newMessageText: "",
      dialogs: [
        {
          id: 1,
          name: "Ruslana",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
        },
        {
          id: 2,
          name: "Roma",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
        },
        {
          id: 3,
          name: "Taras",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
        },
        {
          id: 4,
          name: "Sergey",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
        },
        {
          id: 5,
          name: "Andry",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
        },
      ],
    },
    navPage: {
      navFriends: [
        {
          name: "Ruslana",
          img: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          alt: "Аватар",
        },
        {
          name: "Roma",
          img: "https://crosti.ru/patterns/00/09/59/dc0d3fd8fa/picture.jpg",
          alt: "Аватар",
        },
        {
          name: "Taras",
          img: "https://crosti.ru/patterns/00/09/59/dc0d3fd8fa/picture.jpg",
          alt: "Аватар",
        },
      ],
    },
  },
  _callSubscruber() {},
  getData() {
    return this._data;
  },
  subscribe(observer) {
    this._callSubscruber = observer;
  },
  dispatch(action) {
    this._data.profilePage = profileReducer(this._data.profilePage, action);
    this._data.messagesPage = messagesReducer(this._data.messagesPage, action);
    this._data.navPage = navReducer(this._data.navPage, action);
    this._callSubscruber(this._data);
  },
};

export default store;
window.store = store;
