import classes from "../styles/Main.module.css";

function Main() {
  return (
    <div className={classes.container}>
      <span className={classes.title}>What are you capable of?</span>

      <p className={classes.description}>
        Do not underestimate yourselves. You are more capable than what you
        <br />
        think you are capable of.
      </p>
    </div>
  );
}

export default Main;
