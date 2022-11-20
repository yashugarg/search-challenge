import classes from "../../styles/TokenCard.module.css";

type tokenCardProps = {
  title: string;
  id: string;
  icon: string;
};

function TokenCard({ title, id, icon }: tokenCardProps) {
  return (
    <div className={classes.token}>
      <div className={classes.tokenIcon}>
        <img src={icon} />
      </div>
      <div className={classes.tokenTitle}>{title}</div>
      <div className={classes.tokenId}>{id}</div>
    </div>
  );
}

export default TokenCard;
