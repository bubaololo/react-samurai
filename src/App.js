import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  // console.log(props.state)
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="content_wrapper">
          <Routes>
            <Route exact path="dialogs/*" element={<Dialogs state={props.state.dialogsPage}  />} />
            <Route path="profile" element={<Profile profilePage={ props.state.profilePage } addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
