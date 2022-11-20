import { useRef, useState } from "react";
import classes from "../../styles/Search.module.css";
import AmountFilter from "./amountFilter";
import ChainFilter from "./chainFilter";
import TokenFilter from "./tokenFilter";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function Search() {
  const [isActive, setisActive] = useState(false);
  const [current, setcurrent] = useState(0);

  const _toggleFilter = () => {
    if (!isActive) {
      setisActive(true);
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
          timeout={300}
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
                <TokenFilter />
              ) : current == 1 ? (
                <ChainFilter />
              ) : current == 2 ? (
                <AmountFilter />
              ) : (
                <></>
              ))}
          </div>
        </CSSTransition>
      </SwitchTransition>
      <div className={classes.searchFilter} onClick={_toggleFilter}>
        <button className={_class(0)} onClick={() => setcurrent(0)}>
          <div
            className={
              isActive ? classes.filterContentDesc : classes.filterContent
            }
          >
            Any Token
          </div>
          {isActive && (
            <div className={classes.filterContent}>Choose token</div>
          )}
        </button>
        <button className={_class(1)} onClick={() => setcurrent(1)}>
          <div
            className={
              isActive ? classes.filterContentDesc : classes.filterContent
            }
          >
            Any Chain
          </div>
          {isActive && (
            <div className={classes.filterContent}>Select chain</div>
          )}
        </button>
        <button className={_class(2)} onClick={() => setcurrent(2)}>
          <div
            className={
              isActive ? classes.filterContentDesc : classes.filterContent
            }
          >
            Any Amount
          </div>
          {isActive && (
            <div className={classes.filterContent}>Filter by amount</div>
          )}
        </button>
        <button
          className={classes.searchButton}
          style={{
            backgroundColor: isActive ? "#E6007A" : "rgba(139, 161, 190, 0.2)",
          }}
        >
          <img src="/icons/search-normal.svg" />
          {isActive && (
            <div
              style={{ marginLeft: "10px" }}
              onClick={() => setisActive(!isActive)}
            >
              Search
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Search;
