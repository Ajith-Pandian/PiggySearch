import {
  CHANGE_FILTER_STATE,
  FETCH_RESULTS,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_FAILURE
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
  AMC,
  AMC_PARAMS,
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

const subCategories = {
  [COMMODITIES.name]: addActiveToChildren(COMMODITIES_PARAMS),
  [DEBT.name]: addActiveToChildren(DEBT_PARAMS),
  [EQUITY.name]: addActiveToChildren(EQUITY_PARAMS),
  [HYBRID.name]: addActiveToChildren(HYBRID_PARAMS)
};

const initialState = {
  filters: {
    [RISKS.name]: addActiveToChildren(RISKS_PARAMS),
    [CATEGORIES.name]: addActiveToChildren(CATEGORY_PARAMS),
    [MINIMUM_INVESTMENTS.name]: addActiveToChildren(MINIMUM_INVESTMENTS_PARAMS),
    [PLAN_TYPE.name]: addActiveToChildren(PLAN_TYPE_PARAMS),
    [AMC.name]: addActiveToChildren(AMC_PARAMS),
    [SUB_CATEGORIES.name]: subCategories
  }
};

export default function Filters(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_STATE: {
      return state;
    }
    case FETCH_RESULTS: {
      return { ...state, isLoading: true, isSuccess: false, isError: false };
    }
    case FETCH_RESULTS_SUCCESS: {
      return {
        ...state,
        cases: [...state.cases, action.case],
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    }
    case FETCH_RESULTS_FAILURE: {
      return { ...state, isLoading: false, isSuccess: false, isError: true };
    }

    default:
      return state;
  }
}
