import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loader}></div>
    </div>
  );
}
export default Loader;
