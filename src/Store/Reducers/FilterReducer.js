import {
  CHANGE_FILTER_STATE,
  CHANGE_AMOUNT_FILTER_STATE,
  CHANGE_PLAN_FILTER_STATE,
  CHANGE_SUB_FILTER_STATE,
  CHANGE_SEARCH_TERM,
  RESET_FILTERS,
  FETCH_RESULT,
  FETCH_RESULT_SUCCESS,
  FETCH_RESULT_FAILURE,
  CHANGE_RESULTS_VISIBILITY
} from "../ActionNames";

import update from "immutability-helper";

import {
  RISKS,
  CATEGORIES,
  MINIMUM_INVESTMENTS,
  PLAN_TYPES,
  FUND_HOUSES
} from "../../Constants";

const addActiveToArray = arr => arr.map(item => ({ ...item, active: false }));

const addActiveToArrayAndChild = arr =>
  arr.map(item => ({
    ...item,
    children: addActiveToArray(item.children),
    active: false
  }));

const filters = {
  [RISKS.name]: addActiveToArray(RISKS.children),
  [CATEGORIES.name]: addActiveToArrayAndChild(CATEGORIES.children),
  [FUND_HOUSES.name]: addActiveToArray(FUND_HOUSES.children),
  [MINIMUM_INVESTMENTS.name]: addActiveToArray(MINIMUM_INVESTMENTS.children),
  [PLAN_TYPES.name]: addActiveToArray(PLAN_TYPES.children)
};

const applyDefaultActive = (filters, toActiveFilters) => {
  for (i = 0; i < toActiveFilters.length; i++) {
    let activeFilter = toActiveFilters[i];
    let activeFilterName = activeFilter.name;
    let defaultName = activeFilter.default;
    let defaultItemIndex = activeFilter.children.findIndex(
      item => item.name === defaultName
    );
    filters = update(filters, {
      [activeFilterName]: { [defaultItemIndex]: { active: { $set: true } } }
    });
  }
  return filters;
};
const defaultAppliedFilters = applyDefaultActive(filters, [
  MINIMUM_INVESTMENTS,
  PLAN_TYPES
]);

const initialState = {
  isResultsVisible: false,
  searchTerm: "",
  result: undefined,
  rows: 50,
  offset: 0,
  filters: defaultAppliedFilters
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
      const newState = MINIMUM_INVESTMENTS.children.map(item => {
        return { ...item, active: item.name === childName };
      });
      return update(state, {
        filters: {
          [MINIMUM_INVESTMENTS.name]: { $set: newState }
        }
      });
    }
    case CHANGE_PLAN_FILTER_STATE: {
      let { childName, isActive } = action;
      const newState = PLAN_TYPES.children.map(item => {
        return { ...item, active: item.name === childName };
      });
      return update(state, {
        filters: {
          [PLAN_TYPES.name]: { $set: newState }
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
    case RESET_FILTERS: {
      return initialState;
    }

    default:
      return state;
  }
}
