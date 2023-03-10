import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="content_wrapper">
          <Routes>
            <Route exact path="dialogs/*" element={<Dialogs state={props.store.getState().dialogsPage}  />} />
            <Route path="profile" element={<Profile profilePage={ props.store.getState().profilePage } addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
