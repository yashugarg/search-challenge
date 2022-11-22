import classes from "../../styles/AmountCard.module.css";

type amountCardProps = {
  title: string;
  amount: number;
  updateAmount: (amount: number) => void;
};

function AmountCard({ title, amount, updateAmount }: amountCardProps) {
  return (
    <div className={classes.amountContainer}>
      <div className={classes.amountTitle}>{title}</div>
      <div className={classes.amountAction}>
        <button
          className={classes.actionButton}
          onClick={() => updateAmount(amount - 1)}
        >
          -
        </button>
        <div className={classes.amountValue}>{amount}</div>
        <button
          className={classes.actionButton}
          onClick={() => updateAmount(amount + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default AmountCard;
