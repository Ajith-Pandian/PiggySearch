export const BASE_URL = "https://api.piggy.co.in/v2/mf/search/";

export const TOKEN = "Token a41d2b39e3b47412504509bb5a1b66498fb1f43a";

//// RISKS
export const RISKS = "risks";

const LOW = "low";
const MODERATELY_LOW = "moderately_low";
const MODERATE = "moderate";
const MODERATELY_HIGH = "moderately_high";
const HIGH = "high";

export const RISKS_PARAMS = {
  LOW,
  MODERATELY_LOW,
  MODERATE,
  MODERATELY_HIGH,
  HIGH
};

// CATEGORIES
export const CATEGORIES = "categories";

const COMMODITIES = "commodities";
const DEBT = "debt";
const EQUITY = "equity";
const HYBRID = "hybrid";

export const CATEGORY_PARAMS = {
  COMMODITIES,
  DEBT,
  EQUITY,
  HYBRID
};

// SUB CATEGORIES
export const SUB_CATEGORIES = "sub_categories";

export const SUB_CATEGORY_PARAMS = {
  COMMODITIES: COMMODITIES_PARAMS,
  DEBT: DEPT_PARAMS,
  EQUITY: EQUITY_PARAMS,
  HYBRID: HYBRID_PARAMS
};

// MINIMUM_INVESTMENTS
export const MINIMUM_INVESTMENTS = "minimum_investments";

// FUND HOUSE NAMES
export const AMC = "amc";
const IDFC_MUTUAL_FUND = "idfc_mutual_fund";
const KOTAK_MAHINDRA_MUTUAL_FUND = "kotak_mahindra_mutual_fund";
const BIRLA_SUN_LIFE_MUTUAL_FUND = "birla_sun_life_mutual_fund";
const DHFL_PRAMERICA_MUTUAL_FUND = "dhfl_pramerica_mutual_fund";
const HDFC_MUTUAL_FUND = "hdfc_mutual_fund";
const RELIANCE_MUTUAL_FUND = "reliance_mutual_fund";
const SBI_MUTUAL_FUND = "sbi_mutual_fund";
const AXIS_ASSET_MUTUAL_FUND = "axis_asset_mutual_fund";
const CANARA_ROBECO_MUTUAL_FUND = "canara_robeco_mutual_fund";
const DSP_BLACKROCK_MUTUAL_FUND = "dsp_blackrock_mutual_fund";

export const AMC_PARAMS = {
  IDFC_MUTUAL_FUND,
  KOTAK_MAHINDRA_MUTUAL_FUND,
  BIRLA_SUN_LIFE_MUTUAL_FUND,
  DHFL_PRAMERICA_MUTUAL_FUND,
  HDFC_MUTUAL_FUND,
  RELIANCE_MUTUAL_FUND,
  SBI_MUTUAL_FUND,
  AXIS_ASSET_MUTUAL_FUND,
  CANARA_ROBECO_MUTUAL_FUND,
  DSP_BLACKROCK_MUTUAL_FUND
};

// PLAN TYPE
export const PLAN_TYPE = "plan_type";

const DIRECT_PLAN = "direct_plan";
const REGULAR_PLAN = "regular_plan";

export const PLAN_TYPE_PARAMS = { DIRECT_PLAN, REGULAR_PLAN };

//----SUB CATEGORIES----//
//// COMMODITIES SUB CATEGORIES
const MULTI_COMMODITIES = {
  name: "Multi Commodities",
  value: "multi_commodities"
};
const GOLD = { name: "Gold", value: "gold" };

export const COMMODITIES_PARAMS = { MULTI_COMMODITIES, GOLD };

//// DEPT SUB CATEGORIES
const CREDIT_OPPORTUNITIES = {
  name: "Credit Opportunities",
  value: "credit_opportunities"
};
const DYNAMIC_BOND = { name: "Dynamic Bond", value: "dynamic_bond" };
const ULTRA_SHORT_TERM = {
  name: "Ultra Short Term",
  value: "ultra_short_term"
};
const GILT_SHORT_TERM = { name: "Gilt Short Term", value: "gilt_short_term" };
const GILT_MEDIUM_LONG_TERM = {
  name: "Gilt Medium&Long Term",
  value: "gilt_medium_&_long_term"
};
const SHORT_TERM = { name: "Short Term", value: "short_term" };
const INCOME = { name: "Income", value: "income" };
const LIQUID = { name: "Liquid", value: "liquid" };

export const DEPT_PARAMS = {
  CREDIT_OPPORTUNITIES,
  DYNAMIC_BOND,
  ULTRA_SHORT_TERM,
  GILT_SHORT_TERM,
  GILT_MEDIUM_LONG_TERM,
  SHORT_TERM,
  INCOME,
  LIQUID
};

//// EQUITY SUB CATEGORIES
const ENERGY = { name: "Energy", value: "energy" };
const ENTERTAINMENT = { name: "Entertainment", value: "entertainment" };
const MNC = { name: "MNC", value: "mnc" };
const MULTI_CAP = { name: "Multi Cap", value: "multi_cap" };
const PSU = { name: "PSU", value: "psu" };
const TECHNOLOGY = { name: "Technology", value: "technology" };
const TRANSPORTATION_AND_LOGISTICS = {
  name: "Transportation and Logistics",
  value: "transportation_and_logistics"
};
const BANKING = { name: "Banking", value: "banking" };
const FMCG = { name: "FMCG", value: "fmcg" };
const INFRASTRUCTURE = { name: "Infrastructure", value: "infrastructure" };
const INTERNATIONAL = { name: "International", value: "international" };
const LARGE_CAP = { name: "Large Cap", value: "large_cap" };
const MID_CAP = { name: "Mid Cap", value: "mid_cap" };
const PHARMA = { name: "Pharma", value: "pharma" };
const SMALL_CAP = { name: "Small Cap", value: "small_cap" };
const TAX_PLANNING = { name: "Tax Planning", value: "tax_planning" };

export const EQUITY_PARAMS = {
  ENERGY,
  ENTERTAINMENT,
  MNC,
  PSU,
  TECHNOLOGY,
  TRANSPORTATION_AND_LOGISTICS,
  BANKING,
  FMCG,
  INFRASTRUCTURE,
  INTERNATIONAL,
  LARGE_CAP,
  MID_CAP,
  MULTI_CAP,
  PHARMA,
  SMALL_CAP,
  TAX_PLANNING
};
//// HYBRID SUB CATEGORIES
const ARBITRAGE = { name: "Arbitrage", value: "arbitrage" };
const ASSET_ALLOCATION = {
  name: "Asset Allocation",
  value: "asset_allocation"
};
const FUND_OF_FUNDS = { name: "Fund of Funds", value: "fund_of_funds" };
const MULTIASSET = { name: "MultiAsset", value: "multiasset" };
const DEBT_ORIENTED_AGGRESSIVE = {
  name: "Debt_oriented_Aggressive",
  value: "debt_oriented_aggressive"
};
const DEBT_ORIENTED_CONSERVATIVE = {
  name: "Debt oriented Conservative",
  value: "debt_oriented_conservative"
};
const EQUITY_ORIENTED = { name: "Equity oriented", value: "equity_oriented" };
const MIP_AGGRESSIVE = { name: "MIP Aggressive", value: "mip_aggressive" };

export const HYBRID_PARAMS = {
  ARBITRAGE,
  ASSET_ALLOCATION,
  FUND_OF_FUNDS,
  MULTIASSET,
  DEBT_ORIENTED_AGGRESSIVE,
  DEBT_ORIENTED_CONSERVATIVE,
  EQUITY_ORIENTED,
  MIP_AGGRESSIVE
};