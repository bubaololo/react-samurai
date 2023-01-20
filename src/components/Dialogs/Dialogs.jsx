import styles from './Dialogs.module.css';
import {NavLink, Routes, Route} from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  console.log(path);
  return (
      <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={path} >{props.name}</NavLink>
      </div>
  )
}
const Dialogs = function() {
  return <div className={styles.dialogs}>

    <div className={styles.dialogsItems}>
<DialogItem name="Вася" id="1" />
      {/*<div className={styles.dialog}>*/}
      {/*  <NavLink to="/dialogs/2">Петя</NavLink>*/}
      {/*</div>*/}
      {/*<div className={styles.dialog}>*/}
      {/*  <NavLink to="/dialogs/3">Петя</NavLink>*/}
      {/*</div>*/}
      {/*<div className={styles.dialog}>*/}
      {/*  <NavLink to="/dialogs/4">Коля</NavLink>*/}
      {/*</div>*/}
      {/*<div className={styles.dialog}>*/}
      {/*  <NavLink to="/dialogs/5">Сашок</NavLink>*/}
      {/*</div>*/}
    </div>
    <div className={styles.messages}>
      <div className={styles.message}>Ты кто такой</div>
      <div className={styles.message}>Не хочешь заработать?</div>
      <div className={styles.message}>Заработок на р2р</div>
    </div>
    <Routes>
      <Route  path="dialogs/1" element={<DialogItem name="Вася" id="1" />}>

      </Route>
    </Routes>
  </div>
}
export default Dialogs