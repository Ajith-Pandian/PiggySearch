import {
  CHANGE_FILTER_STATE,
  CHANGE_AMOUNT_FILTER_STATE,
  CHANGE_SUB_FILTER_STATE,
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
  PLAN_TYPES,
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
import { arrayToObject } from "../../Utils";

const addActiveToArray = arr => arr.map(item => ({ ...item, active: false }));

const addActiveToChildArray = arr =>
  arr.map(item => ({ ...item, children: addActiveToArray(item.children) }));

const categories = {};

const initialState = {
  isResultsVisible: false,
  searchTerm: "",
  result: undefined,
  rows: 50,
  offset: 0,
  filters: {
    [RISKS.name]: addActiveToArray(RISKS.children),
    [CATEGORIES.name]: addActiveToChildArray(CATEGORIES.children),
    [MINIMUM_INVESTMENTS.name]: addActiveToArray(MINIMUM_INVESTMENTS.children),
    [PLAN_TYPES.name]: addActiveToArray(PLAN_TYPES.children),
    [FUND_HOUSES.name]: addActiveToArray(FUND_HOUSES.children)
    //[SUB_CATEGORIES.name]: subCategories
  }
};

export default function Filters(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_STATE: {
      let { filterName, childName, isActive } = action;
      let index = state.filters[filterName].findIndex(
        item => item.name === childName
      );
      return update(state, {
        filters: {
          [filterName]: {
            [index]: {
              active: { $set: isActive }
            }
          }
        }
      });
    }
    case CHANGE_AMOUNT_FILTER_STATE: {
      let { childName, isActive } = action;
      const newInvestmentsState = MINIMUM_INVESTMENTS.children.map(item => {
        return { ...item, active: item.name === childName };
      });
      return update(state, {
        filters: {
          [MINIMUM_INVESTMENTS.name]: { $set: newInvestmentsState }
        }
      });
    }
    case CHANGE_SUB_FILTER_STATE: {
      let { parentName, childName, isActive } = action;
      let parentIndex = state.filters[CATEGORIES.name].findIndex(
        item => item.name === parentName
      );
      let index = state.filters[CATEGORIES.name][
        parentIndex
      ].children.findIndex(item => item.name === childName);
      return update(state, {
        filters: {
          [CATEGORIES.name]: {
            [parentIndex]: {
              children: {
                [index]: { active: { $set: isActive } }
              }
            }
          }
        }
      });
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
