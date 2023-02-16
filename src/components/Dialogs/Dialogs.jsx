import styles from "./Dialogs.module.css";
import { NavLink, Routes, Route } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};
const Dialogs = function (props) {
  let dialogsData = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Коля"},
    {id: 4, name: "Рашид"},
    {id: 5, name: "Аюуюакр"},
    {id: 6, name: "Евгений"}
  ]
  let messagesData = [
    {id: 1, message: "Ты кто такой"},
    {id: 2, message: "Не хочешь заработать?"},
    {id: 3, message: "Заработок на р2р"},

  ]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

      </div>
      <div className={styles.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
      <Routes>
        <Route
          exact
          path="dialogs/1"
          element={<DialogItem name="Вася" id="1" />}
        ></Route>
      </Routes>
    </div>
  );
};
export default Dialogs;
