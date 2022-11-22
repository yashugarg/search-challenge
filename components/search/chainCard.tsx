import classes from "../../styles/ChainCard.module.css";

type chainCardProps = {
  title: string;
  isActive: boolean;
  isSelected: boolean;
  onSelect: () => void;
};

function ChainCard({ title, isActive, isSelected, onSelect }: chainCardProps) {
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
        onClick={onSelect}
        disabled={!isActive}
        style={{
          backgroundColor: isSelected ? "rgba(139, 161, 190, 0.2)" : "#E6007A",
        }}
      >
        Select
      </button>
    </div>
  );
}

export default ChainCard;
