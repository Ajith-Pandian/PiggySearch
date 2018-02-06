import {
  RISKS,
  CATEGORIES,
  FUND_HOUSES,
  MINIMUM_INVESTMENTS,
  PLAN_TYPES,
  SUB_CATEGORIES
} from "../Constants";

export const addActiveToArray = arr =>
  arr.map(item => ({ ...item, active: false }));

export const addActiveToArrayAndChild = arr =>
  arr.map(item => ({
    ...item,
    children: addActiveToArray(item.children),
    active: false
  }));

const getActiveElements = arr =>
  arr.filter(item => item.active).map(item => item.value);

const getActiveChildElements = arr =>
  arr.map(item => getActiveElements(item.children));

export const getApiFilters = filters => {
  let risks = getActiveElements(filters[RISKS.name]);
  let categories = getActiveElements(filters[CATEGORIES.name]);
  let fundHouses = getActiveElements(filters[FUND_HOUSES.name]);
  let minInvestments = getActiveElements(filters[MINIMUM_INVESTMENTS.name])[0];
  let planTypes = getActiveElements(filters[PLAN_TYPES.name])[0];
  let subCategories = getActiveChildElements(filters[CATEGORIES.name])[0];

  const apiFilters = {
    [RISKS.value]: risks,
    [CATEGORIES.value]: categories,
    [FUND_HOUSES.value]: fundHouses,
    [MINIMUM_INVESTMENTS.value]: minInvestments,
    [PLAN_TYPES.value]: planTypes,
    [SUB_CATEGORIES.value]: subCategories
  };
  return apiFilters;
};
