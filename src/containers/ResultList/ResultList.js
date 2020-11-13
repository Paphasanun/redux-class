import React from "react";
import { connect } from "react-redux";
import {
  deleteResult,
  DELETE_RESULT,
  storeResult,
  STORE_RESULT,
} from "../../store/action";
import { Col, Row } from "antd";

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
      <Row
        style={{
          width: "680px",
          fontSize: "26px",
          listStyleType: "none",
          margin: "10px auto 20px auto",
          color: "black",
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "2px 2px #6666",
        }}
      >
        {props.rlss55.map(({ id, result }) => (
          <Col
            span={6}
            style={{
              border: "1px solid #6666",
              padding: "4px"
            }}
          >
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
                border: "2px black solid",
              }}
            >
              X
            </button>{" "}
          </Col>
        ))}
      </Row>
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
    onAdd: (value) => dispatch(storeResult(value)),
    onDelete: (id) => dispatch(deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
