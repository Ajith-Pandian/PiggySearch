import {
  CHANGE_FILTER_STATE,
  CHANGE_SEARCH_TERM,
  FETCH_RESULT,
  FETCH_RESULT_SUCCESS,
  FETCH_RESULT_FAILURE,
  CHANGE_RESULTS_VISIBILITY
} from "../ActionNames";

import update from "immutability-helper";

import {
  RISKS,
  RISKS_PARAMS,
  CATEGORIES,
  CATEGORY_PARAMS,
  MINIMUM_INVESTMENTS,
  MINIMUM_INVESTMENTS_PARAMS,
  PLAN_TYPE,
  PLAN_TYPE_PARAMS,
  FUND_HOUSES,
  SUB_CATEGORIES,
  COMMODITIES,
  COMMODITIES_PARAMS,
  DEBT,
  DEBT_PARAMS,
  EQUITY,
  EQUITY_PARAMS,
  HYBRID,
  HYBRID_PARAMS
} from "../../Constants";

const addParam = (obj, param) => ({ ...obj, [param.name]: param.value });

const addParamToChildren = (arr, param) =>
  arrayToObject(Object.keys(arr).map(key => addParam(arr[key], param)));

const addActiveToChildren = obj =>
  addParamToChildren(obj, { name: "active", value: false });

const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.name] = item;
    return obj;
  }, {});

const initialState = {
  isResultsVisible: false,
  searchTerm: "",
  result: undefined,
  rows: 50,
  offset: 0,
  filters: {
    [RISKS.name]: addActiveToChildren(RISKS_PARAMS),
    [CATEGORIES.name]: addActiveToChildren(CATEGORY_PARAMS),
    [MINIMUM_INVESTMENTS.name]: addActiveToChildren(MINIMUM_INVESTMENTS_PARAMS),
    [PLAN_TYPE.name]: addActiveToChildren(PLAN_TYPE_PARAMS),
    [FUND_HOUSES.name]: addActiveToChildren(FUND_HOUSES.value)
    //[SUB_CATEGORIES.name]: subCategories
  }
};

export default function Filters(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_STATE: {
      return state;
    }
    case CHANGE_RESULTS_VISIBILITY: {
      return { ...state, isResultsVisible: action.isVisible };
    }
    case CHANGE_SEARCH_TERM: {
      return { ...state, searchTerm: action.searchTerm };
    }
    case FETCH_RESULT: {
      return { ...state, isLoading: true, isSuccess: false, isError: false };
    }
    case FETCH_RESULT_SUCCESS: {
      return {
        ...state,
        result: action.result,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    }
    case FETCH_RESULT_FAILURE: {
      return { ...state, isLoading: false, isSuccess: false, isError: true };
    }

    default:
      return state;
  }
}
