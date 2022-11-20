import FilterContainer from "./filterContainer";
import ChainCard from "./chainCard";

function ChainFilter() {
  return (
    <FilterContainer title={"Select Chain"} direction="column">
      <ChainCard
        title="Ethereum Mainnet"
        isActive={true}
        isSelected={false}
      ></ChainCard>
      <ChainCard
        title="Ropsten"
        isActive={false}
        isSelected={false}
      ></ChainCard>
    </FilterContainer>
  );
}

export default ChainFilter;
