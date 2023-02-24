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
            <Route exact path="dialogs/*" element={<Dialogs state={props.state.dialogsPage}  />} />
            <Route path="profile" element={<Profile state={ props.state.profilePage } />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
