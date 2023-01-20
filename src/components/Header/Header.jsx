import classes from './Header.module.css';
const Header = function () {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src="https://muho.store/images/tmpimg/logo_main_part.svg" alt="" />
    </header>
  );
};
export default Header;
