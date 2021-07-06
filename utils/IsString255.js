async function isString255({value}) {
  const isValid = typeof value === 'string' && value.length <= 255;

  return Boolean(isValid);
}
module.exports = isString255;
