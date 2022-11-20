import classes from "../../styles/ChainCard.module.css";

type chainCardProps = {
  title: string;
  isActive: boolean;
  isSelected: boolean;
};

function ChainCard({ title, isActive, isSelected }: chainCardProps) {
  return (
    <div className={classes.chain}>
      <div className={classes.chainTitleBlock}>
        <div
          className={classes.activeStatus}
          style={{
            backgroundColor: isActive ? "#E6007A" : "rgba(139, 161, 190, 0.2)",
          }}
        />
        <span className={classes.chainTitle}>{title}</span>
      </div>
      <button
        className={classes.selectionButton}
        style={{
          backgroundColor: isSelected ? "#E6007A" : "rgba(139, 161, 190, 0.2)",
        }}
      >
        Select
      </button>
    </div>
  );
}

export default ChainCard;
