import FilterContainer from "./filterContainer";
import TokenCard from "./tokenCard";

const tokens = [
  { title: "Ethereum", id: "ETH", icon: "/icons/ETH.svg" },
  { title: "Cardano", id: "ADA", icon: "/icons/ADA.svg" },
];

type tokenProps = {
  token: string;
  setToken: (token: string) => void;
};

function TokenFilter({ token, setToken }: tokenProps) {
  return (
    <FilterContainer
      title={"Choose Token"}
      direction="row"
      onClear={() => setToken("")}
    >
      {tokens.map((t) => {
        return (
          <TokenCard
            key={t.id}
            title={t.title}
            id={t.id}
            icon={t.icon}
            isSelected={token == t.id}
            onSelect={() => setToken(t.id)}
          />
        );
      })}
    </FilterContainer>
  );
}

export default TokenFilter;
