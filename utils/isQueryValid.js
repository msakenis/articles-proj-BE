async function isQueryValid({value}) {
  const regexForAlphanumeric = new RegExp(/^[\w\-\s]+$/);
  const isValid = typeof value === 'string' && value.length <= 40 && regexForAlphanumeric.test(value);

  return Boolean(isValid);
}
module.exports = isQueryValid;
