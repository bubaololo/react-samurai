import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog + " " + styles.active}>
      <div className={styles.avatar} style={{backgroundImage: `url(${props.img})`}}></div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
