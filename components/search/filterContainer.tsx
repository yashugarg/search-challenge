import classes from "../../styles/FilterContainer.module.css";

function FilterContainer(props: any) {
  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>{props.title}</div>
      <div
        className={classes.containerChildren}
        style={{ flexDirection: props.direction }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default FilterContainer;
