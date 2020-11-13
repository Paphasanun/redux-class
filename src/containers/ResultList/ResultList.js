import React from "react";
import { connect } from "react-redux";
import { DELETE_RESULT, STORE_RESULT } from "../../store/action";

function ResultList(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => props.onAdd(props.ctrss55)}
        style={{
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
          outline: "none",
          backgroundColor: "beige",
          border: "2px dashed",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        Store the value
      </button>
      <ul
        style={{
          width: "400px",
          fontSize: "26px",
          listStyleType: "none",
          margin: "0 auto",
          color: "black",
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "2px 2px #6666",
          display: "flex",
        }}
      >
        {props.rlss55.map(({ id, result }) => (
          <li style={{ marginLeft: "20px" }}>
            {result}{" "}
            <button
              onClick={() => props.onDelete(id)}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "10px",
                fontSize: "6px",
                textAlign: "center",
                backgroundColor: "GoldenRod",
                cursor: "pointer",
                outline: "none",
                fontWeight: "bolder",
                border: "2px black solid"
              }}
            >
              X
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rlss55: state.resCombine.resultList,
    ctrss55: state.ctrCombine.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (value) => dispatch({ type: STORE_RESULT, counter: value }),
    onDelete: (id) => dispatch({ type: DELETE_RESULT, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
