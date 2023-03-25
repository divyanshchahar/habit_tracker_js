/**
 * Converts date from YYYY-MM-DD format to YYYY-M-D i.e. 2023-09-01 get convered to 2023-9-1
 * @param {String} dateString - Date in the format YYYY-MM-DD i.e. 2023-09-117
 * @returns {String} date in the format YYYY-M-D
 */
function utcLikeDate(dateString) {
  const [year, month, date] = dateString.split("-");

  return `${Number(year)}-${Number(month)}-${Number(date)}`;
}

export default utcLikeDate;
