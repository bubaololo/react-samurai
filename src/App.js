import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

  let state = props.store.getState()
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="content_wrapper">
          <Routes>
            <Route exact path="dialogs/*" element={<DialogsContainer store={props.store} />} />
            <Route path="profile" element={ <Profile store={props.store}   />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
