import classes from "../../styles/TokenCard.module.css";

type tokenCardProps = {
  title: string;
  id: string;
  icon: string;
  isSelected: boolean;
  onSelect: () => void;
};

function TokenCard({ title, id, icon, isSelected, onSelect }: tokenCardProps) {
  const _selectionClass = [
    classes.token,
    isSelected ? classes.selected : classes.unselected,
  ].join(" ");
  return (
    <div className={_selectionClass} onClick={onSelect}>
      <div className={classes.tokenIcon}>
        <img src={icon} />
      </div>
      <div className={classes.tokenTitle}>{title}</div>
      <div className={classes.tokenId}>{id}</div>
    </div>
  );
}

export default TokenCard;
