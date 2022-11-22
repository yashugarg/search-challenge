import FilterContainer from "./filterContainer";
import AmountCard from "./amountCard";

type amountProps = {
  amount: { max: number; min: number };
  setAmount: (amount: { max: number; min: number }) => void;
};

function AmountFilter({ amount, setAmount }: amountProps) {
  return (
    <FilterContainer
      title={"Filter by amount"}
      direction="column"
      onClear={() => setAmount({ min: 0, max: 20 })}
    >
      <AmountCard
        title="Max amount"
        amount={amount["max"]}
        updateAmount={(a: number) => {
          if (a >= 0 && a > amount["min"])
            setAmount({ min: amount["min"], max: a });
        }}
      ></AmountCard>
      <AmountCard
        title="Min amount"
        amount={amount["min"]}
        updateAmount={(a: number) => {
          if (a >= 0 && a < amount["max"])
            setAmount({ min: a, max: amount["max"] });
        }}
      ></AmountCard>
    </FilterContainer>
  );
}

export default AmountFilter;
