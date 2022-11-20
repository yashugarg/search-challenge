import classes from "../../styles/AmountCard.module.css";

type amountCardProps = {
  title: string;
  amount: number;
};

function AmountCard({ title, amount }: amountCardProps) {
  return (
    <div className={classes.amountContainer}>
      <div className={classes.amountTitle}>{title}</div>
      <div className={classes.amountAction}>
        <button className={classes.actionButton}>-</button>
        <div className={classes.amountValue}>{amount}</div>
        <button className={classes.actionButton}>+</button>
      </div>
    </div>
  );
}

export default AmountCard;
