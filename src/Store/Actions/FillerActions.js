import {
  CHANGE_FILTER_STATE,
  FETCH_RESULT,
  FETCH_RESULT_SUCCESS,
  FETCH_RESULT_FAILURE
} from "../ActionNames";
//import ApiHelper from "../../ApiHelper";

export const changeFilter = filters => dispatch =>
  dispatch(_changeFilter(filters));

function _changeFilter(filters) {
  return { type: CHANGE_FILTER_STATE, filters };
}

export const fetchResult = (term, rows = 50, offset = 0) => dispatch => {
  dispatch(_fetchResult());
  ApiHelper.search(id).then(res => {
    if (res && res.success) {
      dispatch(_fetchResultSuccess(res.data));
    } else dispatch(_fetchResultFailure());
  });
};

function _fetchResult() {
  return {
    type: FETCH_RESULT
  };
}
function _fetchResultSuccess(data) {
  return { type: FETCH_RESULT_SUCCESS, case: data };
}

function _fetchResultFailure() {
  return {
    type: FETCH_RESULT_FAILURE
  };
}
