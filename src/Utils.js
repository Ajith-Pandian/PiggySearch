export const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.name] = item;
    return obj;
  }, {});