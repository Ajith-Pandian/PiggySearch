import {
  CHANGE_FILTER_STATE,
  CHANGE_AMOUNT_FILTER_STATE,
  CHANGE_SEARCH_TERM,
  FETCH_RESULT,
  FETCH_RESULT_SUCCESS,
  FETCH_RESULT_FAILURE,
  CHANGE_RESULTS_VISIBILITY
} from "../ActionNames";
import ApiHelper from "../../ApiHelper";

export const changeFilter = (filterName, childName, isActive) => dispatch =>
  dispatch(_changeFilter(filterName, childName, isActive));

function _changeFilter(filterName, childName, isActive) {
  return { type: CHANGE_FILTER_STATE, filterName, childName, isActive };
}
export const changeAmountFilter = (childName, isActive) => dispatch =>
  dispatch(_changeAmountFilter(childName, isActive));

function _changeAmountFilter(childName, isActive) {
  return { type: CHANGE_AMOUNT_FILTER_STATE, childName, isActive };
}

export const changeResultsVisibility = isVisible => dispatch =>
  dispatch(_changeResultsVisibility(isVisible));

function _changeResultsVisibility(isVisible) {
  return { type: CHANGE_RESULTS_VISIBILITY, isVisible };
}
export const changeSearchTerm = searchTerm => dispatch =>
  dispatch(_changeSearchTerm(searchTerm));

function _changeSearchTerm(searchTerm) {
  return { type: CHANGE_SEARCH_TERM, searchTerm };
}

export const fetchResult = (term, rows = 50, offset = 0) => dispatch => {
  dispatch(_fetchResult());
  const params = {
    search: term,
    rows,
    offset
  };
  ApiHelper.search(params).then(res => {
    if (res && res["status-code"] === 1) {
      dispatch(_fetchResultSuccess(res.data["search_results"]));
      dispatch(_changeResultsVisibility(true));
    } else dispatch(_fetchResultFailure());
  });
};

function _fetchResult() {
  return {
    type: FETCH_RESULT
  };
}
function _fetchResultSuccess(data) {
  return { type: FETCH_RESULT_SUCCESS, result: data };
}

function _fetchResultFailure() {
  return {
    type: FETCH_RESULT_FAILURE
  };
}
