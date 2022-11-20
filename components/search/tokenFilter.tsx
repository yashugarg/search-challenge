import FilterContainer from "./filterContainer";
import TokenCard from "./tokenCard";

function TokenFilter() {
  return (
    <FilterContainer title={"Choose Token"} direction="row">
      <TokenCard title="Ethereum" id="ETH" icon="/icons/ETH.svg"></TokenCard>
      <TokenCard title="Cardano" id="ADA" icon="/icons/ADA.svg"></TokenCard>
    </FilterContainer>
  );
}

export default TokenFilter;
