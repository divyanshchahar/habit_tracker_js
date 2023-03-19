/**
 * Function to convert YYYY-MM into YYYY-M i.e. 2018-03 get converted to 2018-3
 * @param {String} dateString - date in the format `YYYY-MM` eg: 2018-03
 * @returns {Array} - Array of Year and Month from DAte Object
 */

function processYearMonth(dateString) {
  const processedDate = new Date(dateString);

  return [
    processedDate.getFullYear().toString(),
    processedDate.getMonth().toString(),
  ];
}
export default processYearMonth;
