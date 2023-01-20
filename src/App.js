import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      {/*<Profile />*/}
      <div className="content_wrapper">
      <Dialogs />
      </div>
    </div>
  );
};

export default App;
