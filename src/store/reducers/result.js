import { uniqueId } from "lodash";
import { DELETE_RESULT, STORE_RESULT } from "../action";

const initialState = {
  counter: 1,
  resultList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        resultList: [
          ...state.resultList,
          { id: uniqueId(), result: action.counter },
        ],
      };
    case DELETE_RESULT:
      return {
        ...state,
        resultList: state.resultList.filter(
          (rs) => Number(rs.id) !== Number(action.id)
        ),
      };
    default:
      return state;
  }
};

export default reducer;
