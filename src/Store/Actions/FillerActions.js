import {
  CHANGE_FILTER_STATE,
  FETCH_RESULTS,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_FAILURE
} from "../ActionNames";
//import ApiHelper from "../../ApiHelper";

export const changeFilter = filters => dispatch =>
  dispatch(_changeFilter(filters));

function _changeFilter(filters) {
  return { type: CHANGE_FILTER_STATE, filters };
}

export const fetchCase = id => dispatch => {
  dispatch(_fetchCase());
  ApiHelper.getCase(id).then(res => {
    if (res && res.success) {
      dispatch(_fetchCaseSuccess(getCaseFromJson(res.data)));
      dispatch(fetchHistory(id));
    } else dispatch(_fetchCaseFailure());
  });
};

function _fetchCase() {
  return {
    type: FETCH_CASE
  };
}
function _fetchCaseSuccess(data) {
  return { type: FETCH_CASE_SUCCESS, case: data };
}

function _fetchCaseFailure() {
  return {
    type: FETCH_CASE_FAILURE
  };
}

export const fetchHistory = id => dispatch => {
  dispatch(_fetchHistory());
  ApiHelper.getHistory(id).then(res => {
    res && res.success
      ? dispatch(_fetchHistorySuccess(id, res.data))
      : dispatch(_fetchHistoryFailure());
  });
};

function _fetchHistory() {
  return {
    type: FETCH_HISTORY
  };
}
function _fetchHistorySuccess(id, data) {
  return { type: FETCH_HISTORY_SUCCESS, id, history: data };
}

function _fetchHistoryFailure() {
  return {
    type: FETCH_HISTORY_FAILURE
  };
}
