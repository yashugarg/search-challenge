import FilterContainer from "./filterContainer";
import ChainCard from "./chainCard";

const chains = [
  { title: "Ethereum Mainnet", isActive: true },
  { title: "Ropsten", isActive: false },
];

type chainProps = {
  chain: string;
  setChain: (chain: string) => void;
};

function ChainFilter({ chain, setChain }: chainProps) {
  return (
    <FilterContainer
      title={"Select Chain"}
      direction="column"
      onClear={() => setChain("")}
    >
      {chains.map((c) => {
        return (
          <ChainCard
            key={c.title}
            title={c.title}
            isActive={c.isActive}
            isSelected={chain == c.title}
            onSelect={() => setChain(c.title)}
          />
        );
      })}
    </FilterContainer>
  );
}

export default ChainFilter;
