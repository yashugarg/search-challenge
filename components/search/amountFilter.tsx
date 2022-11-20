import FilterContainer from "./filterContainer";
import AmountCard from "./amountCard";

function AmountFilter() {
  return (
    <FilterContainer title={"Filter by amount"} direction="column">
      <AmountCard title="Max amount" amount={10}></AmountCard>
      <AmountCard title="Min amount" amount={1}></AmountCard>
    </FilterContainer>
  );
}

export default AmountFilter;
