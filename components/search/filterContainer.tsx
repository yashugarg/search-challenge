import classes from "../../styles/FilterContainer.module.css";

type filterContainerProps = {
  title: string;
  onClear: () => void;
  direction: "row" | "column";
  children: React.ReactNode;
};

function FilterContainer({
  title,
  onClear,
  direction,
  children,
}: filterContainerProps) {
  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>
        {title}
        <button className={classes.clearButton} onClick={onClear}>
          Clear
        </button>
      </div>
      <div
        className={classes.containerChildren}
        style={{ flexDirection: direction }}
      >
        {children}
      </div>
    </div>
  );
}

export default FilterContainer;
