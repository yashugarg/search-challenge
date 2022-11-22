import { useRef, useState } from "react";
import classes from "../../styles/Search.module.css";
import AmountFilter from "./amountFilter";
import ChainFilter from "./chainFilter";
import TokenFilter from "./tokenFilter";
import { CSSTransition, SwitchTransition } from "react-transition-group";

type searchProps = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

function Search({ isActive, setIsActive }: searchProps) {
  const [current, setCurrent] = useState(0);
  const [token, setToken] = useState("");
  const [chain, setChain] = useState("");
  const [amount, setAmount] = useState({ min: 0, max: 20 });

  const _toggleFilter = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };
  const _class = (index: number) =>
    isActive && index == current ? classes.selectedItem : classes.searchItem;
  const nodeRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div className={classes.searchContainer}>
      <SwitchTransition mode="out-in">
        <CSSTransition
          classNames="fade"
          in={isActive}
          nodeRef={nodeRef}
          timeout={250}
          unmountOnExit
        >
          <div
            ref={nodeRef}
            style={{
              alignSelf:
                current == 0 ? "start" : current == 1 ? "center" : "end",
            }}
          >
            {isActive &&
              (current == 0 ? (
                <TokenFilter token={token} setToken={setToken} />
              ) : current == 1 ? (
                <ChainFilter chain={chain} setChain={setChain} />
              ) : current == 2 ? (
                <AmountFilter amount={amount} setAmount={setAmount} />
              ) : (
                <></>
              ))}
          </div>
        </CSSTransition>
      </SwitchTransition>
      <div
        className={
          isActive ? classes.filterBorderActive : classes.filterBorderInactive
        }
      >
        <div className={classes.searchFilter} onClick={_toggleFilter}>
          <button className={_class(0)} onClick={() => setCurrent(0)}>
            <div
              className={
                isActive ? classes.filterContentDesc : classes.filterContent
              }
            >
              {token == "" ? "Any Token" : token}
            </div>
            {isActive && (
              <div className={classes.filterContent}>Choose token</div>
            )}
          </button>
          {!isActive && <div className={classes.separator} />}
          <button className={_class(1)} onClick={() => setCurrent(1)}>
            <div
              className={
                isActive ? classes.filterContentDesc : classes.filterContent
              }
            >
              {chain == "" ? "Any Chain" : chain}
            </div>
            {isActive && (
              <div className={classes.filterContent}>Select chain</div>
            )}
          </button>
          {!isActive && <div className={classes.separator} />}
          <button className={_class(2)} onClick={() => setCurrent(2)}>
            <div
              className={
                isActive ? classes.filterContentDesc : classes.filterContent
              }
            >
              {amount["min"] == 0 && amount["max"] == 20
                ? "Any Amount"
                : amount["min"] + "-" + amount["max"]}
            </div>
            {isActive && (
              <div className={classes.filterContent}>Filter by amount</div>
            )}
          </button>
          <button
            className={classes.searchButton}
            style={{
              backgroundColor: isActive
                ? "#E6007A"
                : "rgba(139, 161, 190, 0.2)",
            }}
            onClick={() => setIsActive(!isActive)}
          >
            <img src="/icons/search-normal.svg" />
            {isActive && <div style={{ marginLeft: "10px" }}>Search</div>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
