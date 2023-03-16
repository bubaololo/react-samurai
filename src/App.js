import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  let state = props.store.getState()
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="content_wrapper">
          <Routes>
            <Route exact path="dialogs/*" element={<Dialogs state={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)}  />} />
            <Route path="profile" element={ <Profile profilePage={ state.profilePage }
                // addPost={props.store.addPost.bind(props.store)}
                dispatch={props.store.dispatch.bind(props.store)} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
