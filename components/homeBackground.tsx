import Main from "./main";
import classes from "../styles/HomeBackground.module.css";

type homeBackgroundProps = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

function HomeBackground({ isActive, setIsActive }: homeBackgroundProps) {
  return (
    <div className={classes.backgroundContainer}>
      <div
        className={classes.main}
        style={{ bottom: !isActive ? "0px" : "200px" }}
      >
        {isActive && (
          <div
            className={classes.backdrop}
            onClick={() => setIsActive(false)}
          />
        )}
        <Main />
      </div>
      <div
        className={classes.bottom}
        style={{ bottom: isActive ? "0px" : "-200px" }}
      />
    </div>
  );
}

export default HomeBackground;
