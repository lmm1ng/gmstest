export const isArrayValidForTable = array => {
  const hash = {};
  for (let object of array) {
    Object.keys(object).forEach(key =>
      hash[key] ? hash[key]++ : (hash[key] = 1)
    );
  }
  return new Set(Object.values(hash)).size === 1;
};
